/*****************************************************************************/
/* Correlator Publish Functions
/*****************************************************************************/

// Meteor.publish('correlator', function(sigNames, topN) {
// var s = "<--- publish correlator in server/publish/correlator.js";
//
// var nameList = [];
// if (sigNames) {
// for (var i = 0, length = sigNames.length; i < length; i++) {
// var sigName = sigNames[i];
// var fields = sigName.split('_v');
// fields.pop();
// var rootName = fields.join('_v');
// nameList.push(rootName);
// }
// }
//
// var findResult = Correlator.find({
// 'name_1' : {
// $in : nameList
// }
// });
// console.log('correlator ', sigNames, 'count:', findResult.count(), 'nameList', nameList.join(), s);
// return findResult;
// });

/**
 * Separate correlator event_2's by datatype. Return an object keyed on datatype.
 * @param {Object} correlatorCursor
 */
var separateCorrelatorScoresByDatatype = function(correlatorCursor) {
    var eventsByType = {};
    var correlatorDocs = correlatorCursor.fetch();

    if (correlatorDocs.length == 0) {
        return eventsByType;
    }

    // add pivot event
    var doc = correlatorDocs[0];
    var name = doc["name_1"];
    var datatype = doc["datatype_1"];
    var version = doc["version_1"];
    eventsByType[datatype] = [{
        "name" : name,
        "version" : version
    }];

    // add correlated events
    _.each(correlatorDocs, function(element, index, list) {
        var doc = element;
        name = doc["name_2"];
        datatype = doc["datatype_2"];
        version = doc["version_2"];
        var score = doc["score"];
        if (!eventsByType.hasOwnProperty(datatype)) {
            eventsByType[datatype] = [];
        }
        eventsByType[datatype].push({
            "name" : name,
            "version" : version
        });
    });

    return eventsByType;
};

/**
 * Query correlator collection by mongo "_id" field.
 */
var getCorrelatorCursorByMongoId = function(idList) {
    var cursor = Correlator.find({
        "_id" : {
            "$in" : idList
        }
    });
    return cursor;
};

/**
 * Get top/bottom correlator scores from Mongo collection
 */
var getCorrelatorIds_forDatatype = function(pivotName, pivotDatatype, pivotVersion, datatype_2, ascOrDesc, limit, skip) {
    var direction = (ascOrDesc === "asc") ? 1 : -1;
    // var datatype_2 = "expression";

    var selector = {
        "name_1" : pivotName,
        "datatype_1" : pivotDatatype,
        "version_1" : pivotVersion,
        "datatype_2" : datatype_2
    };

    var options = {
        "fields" : {
            "_id" : 1
        },
        "sort" : {
            "score" : direction
        },
        "limit" : limit,
        "skip" : skip
    };

    var cursor = Correlator.find(selector, options);

    var docs = cursor.fetch();
    var ids = _.pluck(docs, "_id");

    return ids;
};

var getCorrelatorIds_forExpr = function(pivotName, pivotDatatype, pivotVersion, ascOrDesc, limit, skip) {
    var ids = getCorrelatorIds_forDatatype(pivotName, pivotDatatype, pivotVersion, "expression", ascOrDesc, limit, skip);
    return ids;
};

/**
 * Get the correlator signature type based on regex on signature name.
 */
var getCorrelatorSigType = function(sigName) {
    var type = "expression signature";

    if (sigName.match(/_kinase_viper$/)) {
        type = "kinase target activity";
    } else if (sigName.match(/_tf_viper$/)) {
        type = "tf target activity";
    }

    return type;
};

var getCorrelatorIds_forSign = function(pivotName, pivotDatatype, pivotVersion, pagingSettings) {
    var s = "<--- getCorrelatorIds_forSign in server/publish/correlator.js";
    var pageSize = 5;

    var selector = {
        "name_1" : pivotName,
        "datatype_1" : pivotDatatype,
        "version_1" : pivotVersion,
        "datatype_2" : "signature"
    };

    var options = {
        "fields" : {
            "_id" : 1,
            "name_2" : 1
        },
        "sort" : {
            "score" : -1
        }
    };

    var cursor = Correlator.find(selector, options);

    // separate _id's by datatype
    var docs = cursor.fetch();

    var groupedIds = {};
    _.each(docs, function(element, index, list) {
        var doc = element;
        var name_2 = doc["name_2"];
        var id = doc["_id"];

        var datatype = getCorrelatorSigType(name_2);
        if (!groupedIds.hasOwnProperty(datatype)) {
            groupedIds[datatype] = [];
        }

        groupedIds[datatype].push(id);
    });

    // trim down id list based on pagingSettings
    var ids = [];
    _.each(_.keys(groupedIds), function(element, index, list) {
        var group = element;

        var skipCounts = (pagingSettings.hasOwnProperty(group)) ? pagingSettings[group] : {
            "head" : 0,
            "tail" : 0
        };

        var headIds = groupedIds[group].slice(skipCounts["head"], skipCounts["head"] + pageSize);
        var tailIds = groupedIds[group].slice((-1 - skipCounts["tail"]) - pageSize, (-1 - skipCounts["tail"]));

        ids = ids.concat(headIds, tailIds);
    });

    return ids;
};

/**
 * correlatorResults publication
 *
 * parameter "geneList" is for specifying a geneList manually selected, ie. not via correlator.
 */
Meteor.publish("correlatorResults", function(pivotName, pivotDatatype, pivotVersion, Study_ID, pagingConfig, nonCorrGeneList) {
    var s = "<--- publish correlatorResults in server/publish/correlator.js";
    var pageSize = 5;
    var cursors = [];

    if (nonCorrGeneList == null) {
        nonCorrGeneList = [];
    }

    // clinical events
    var clinicalEventsCursor = ClinicalEvents.find({
        "study" : Study_ID
    });
    cursors.push(clinicalEventsCursor);

    console.log("arguments", pivotName, pivotDatatype, pivotVersion, Study_ID, pagingConfig, s);

    // get correlator scores from Mongo collection
    if (pivotDatatype !== "clinical") {
        // unexpected versioning
        pivotVersion = 5;
    }

    // possible datatypes from pagingConfig parameter
    var datatypes = ["expression data", "kinase target activity", "tf target activity", "expression signature"];

    var skipCount = {};
    _.each(datatypes, function(element, index, list) {
        var datatype = element;
        skipCount[datatype] = {
            "head" : 0,
            "tail" : 0
        };
    });

    _.each(_.keys(skipCount), function(element, index, list) {
        var datatype = element;
        if (pagingConfig.hasOwnProperty(datatype)) {
            var datatypePaging = pagingConfig[datatype];
            skipCount[datatype]["head"] = pageSize * datatypePaging["head"];
            skipCount[datatype]["tail"] = pageSize * datatypePaging["tail"];
        }
    });

    var correlatorIds = [];

    // expression correlator _ids
    var expr_ids_top = getCorrelatorIds_forExpr(pivotName, pivotDatatype, pivotVersion, "desc", pageSize, skipCount["expression data"]["head"]);
    var expr_ids_bottom = getCorrelatorIds_forExpr(pivotName, pivotDatatype, pivotVersion, "asc", pageSize, skipCount["expression data"]["tail"]);

    correlatorIds = correlatorIds.concat(expr_ids_top, expr_ids_bottom);

    // signature correlator _ids
    var sig_ids = getCorrelatorIds_forSign(pivotName, pivotDatatype, pivotVersion, skipCount);

    correlatorIds = correlatorIds.concat(sig_ids);
    console.log("correlatorIds", correlatorIds.length, s);

    // get correlator scores
    var correlatorCursor = getCorrelatorCursorByMongoId(correlatorIds);
    cursors.push(correlatorCursor);
    console.log("correlatorCursor", correlatorCursor.fetch().length, s);

    // separate correlator scores by datatype
    var eventsByType = separateCorrelatorScoresByDatatype(correlatorCursor);

    // get expression values from Mongo collection
    if (eventsByType.hasOwnProperty("expression") || nonCorrGeneList.length != 0) {
        var corrExpEvents = eventsByType["expression"];
        var geneList = _.pluck(corrExpEvents, "name");
        console.log("geneList", geneList.length, s);
        geneList = geneList.concat(nonCorrGeneList);
        console.log("geneList", geneList.length, "after adding nonCorrGeneList", s);
        var expression2Cursor = Expression2.find({
            'gene' : {
                "$in" : geneList
            },
            'Study_ID' : Study_ID
        });
        cursors.push(expression2Cursor);

        console.log("expression2Cursor", expression2Cursor.fetch().length, s);

        var mutationsCursor = Mutations.find({
            "gene_label" : {
                "$in" : geneList
            }
        });
        cursors.push(mutationsCursor);
    }

    // get signature scores from Mongo collection
    if (eventsByType.hasOwnProperty("signature")) {
        var corrSigEvents = eventsByType["signature"];
        var sigNames = _.map(corrSigEvents, function(element) {
            var name = element["name"];
            var version = element["version"];
            return name + "_v" + version;
        });

        console.log("sigNames", sigNames.length, s);
        var signatureScoresCursor = SignatureScores.find({
            'name' : {
                "$in" : sigNames
            }
        });
        cursors.push(signatureScoresCursor);
    } else {
        var signatureScoresCursor = SignatureScores.find({
            'name' : {
                "$in" : ["MAP3K8_kinase_viper_v5", "AURKB_kinase_viper_v5"]
            }
        });
        cursors.push(signatureScoresCursor);
    }

    console.log("cursors", cursors.length, pivotName, s);

    return cursors;
});
