/*****************************************************************************/
/* Correlator Publish Functions
 /*****************************************************************************/

Meteor.publish('correlator', function(sigNames, topN) {
    var s = "<--- publish correlator in server/publish/correlator.js";

    var nameList = [];
    if (sigNames) {
        for (var i = 0, length = sigNames.length; i < length; i++) {
            var sigName = sigNames[i];
            var fields = sigName.split('_v');
            fields.pop();
            var rootName = fields.join('_v');
            nameList.push(rootName);
        }
    }

    var findResult = Correlator.find({
        'name_1' : {
            $in : nameList
        }
    });
    console.log('correlator ', sigNames, 'count:', findResult.count(), 'nameList', nameList.join(), s);
    return findResult;
});

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
    for (var i = 0, length = correlatorDocs.length; i < length; i++) {
        doc = correlatorDocs[i];
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
    };
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
 * Get top/bottom correlator scores
 */
var getCorrelatorIds_forDatatype = function(pivotName, pivotDatatype, pivotVersion, datatype_2, ascOrDesc, limit, skip) {
    // get correlator scores from Mongo collection

    var direction = (ascOrDesc === "asc") ? 1 : -1;
    // var datatype_2 = "expression";

    var cursor = Correlator.find({
        "name_1" : pivotName,
        "datatype_1" : pivotDatatype,
        "version_1" : pivotVersion,
        "datatype_2" : datatype_2
    }, {
        "fields" : {
            "_id" : 1
        },
        "sort" : {
            "score" : direction
        },
        "limit" : limit,
        "skip" : skip
    });

    var docs = cursor.fetch();
    var ids = _.pluck(docs, "_id");

    return ids;
};

/**
 * correlatorResults publication
 */
Meteor.publish("correlatorResults", function(pivotName, pivotDatatype, pivotVersion, Study_ID, pagingConfig) {
    var s = "<--- publish correlatorResults in server/publish/correlator.js";
    var pageSize = 5;
    var cursors = [];

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

    // TODO expression correlator _ids
    var skipCount = {
        "head" : 0,
        "tail" : 0
    };
    if (pagingConfig.hasOwnProperty("expression data")) {
        var expressionPaging = pagingConfig["expression data"];
        skipCount["head"] = pageSize * expressionPaging["head"];
        skipCount["tail"] = pageSize * expressionPaging["tail"];
    }

    var correlatorIds = [];
    var expr_ids_top = getCorrelatorIds_forDatatype(pivotName, pivotDatatype, pivotVersion, "expression", "desc", pageSize, skipCount["head"]);
    var expr_ids_bottom = getCorrelatorIds_forDatatype(pivotName, pivotDatatype, pivotVersion, "expression", "asc", pageSize, skipCount["tail"]);

    correlatorIds = correlatorIds.concat(expr_ids_top, expr_ids_bottom);

    // TODO signature correlator _ids
    var sig_ids_top = getCorrelatorIds_forDatatype(pivotName, pivotDatatype, pivotVersion, "signature", "desc", pageSize, 0);
    var sig_ids_bottom = getCorrelatorIds_forDatatype(pivotName, pivotDatatype, pivotVersion, "signature", "asc", pageSize, 0);

    correlatorIds = correlatorIds.concat(sig_ids_top, sig_ids_bottom);

    // get correlator scores
    var correlatorCursor = getCorrelatorCursorByMongoId(correlatorIds);

    cursors.push(correlatorCursor);

    console.log("correlatorCursor", correlatorCursor.fetch().length, s);

    // separate correlator scores by datatype
    var eventsByType = separateCorrelatorScoresByDatatype(correlatorCursor);

    // console.log("eventsByType", eventsByType, s);

    // get expression values from Mongo collection
    if (eventsByType.hasOwnProperty("expression")) {
        var corrExpEvents = eventsByType["expression"];
        var geneList = _.pluck(corrExpEvents, "name");
        console.log("geneList", geneList.length, s);
        var expression2Cursor = Expression2.find({
            'gene' : {
                "$in" : geneList
            },
            'Study_ID' : Study_ID
        });
        cursors.push(expression2Cursor);

        var mutationsCursor = Mutations.find({
            "MA_FImpact" : {
                "$in" : ["medium", "high"]
            },
            "Study_ID" : Study_ID,
            "Hugo_Symbol" : {
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
