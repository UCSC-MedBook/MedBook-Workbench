/*****************************************************************************/
/* Correlator Publish Functions
/*****************************************************************************/

/**
 * Get the signature names for a list of genes.
 */
var getSignatureNamesForGenes = function(geneList) {
    var regexList = [];
    _.each(geneList, function(gene) {
        var regex = new RegExp("^" + gene + "_");
        regexList.push(regex);
    });

    var cursor = SignatureScores.find({
        "name" : {
            "$in" : regexList
        }
    }, {
        fields : {
            "name" : 1
        }
    });

    var sigNames = _.uniq(_.pluck(cursor.fetch(), "name"));
    return sigNames;
};

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
    } else if (sigName.match(/_mvl_drug_sensitivity$/)) {
        type = "mvl drug sensitivity";
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
        var idsForThisGroup = [];

        var skipCounts = (pagingSettings.hasOwnProperty(group)) ? pagingSettings[group] : {
            "head" : 0,
            "tail" : 0
        };

        var start = skipCounts["head"];
        var end = start + pageSize;
        var headIds = groupedIds[group].slice(start, end);
        idsForThisGroup = (headIds);

        // take anti-correlated events from the bottom of the list
        // clinical events are scored via ANOVA, so there is no implied direction
        if (pivotDatatype !== "clinical") {
            groupedIds[group].reverse();
            start = skipCounts["tail"];
            end = start + pageSize;
            var tailIds = groupedIds[group].slice(start, end);
            tailIds.reverse();

            idsForThisGroup = idsForThisGroup.concat(tailIds);
        } else {
            // don't return an empty list of headIds
            if (idsForThisGroup.length < pageSize) {
                var start = groupedIds[group].length - pageSize - 1;
                // do not allow start to be neg
                start = (start < 0) ? 0 : start;
                var headIds = groupedIds[group].slice(start);
                idsForThisGroup = (headIds);
            }
        }

        ids = ids.concat(idsForThisGroup);
    });

    return ids;
};

/**
 *  Get contrast data from Contrast collection.
 */
var getContrastData = function(studyId, contrastId) {
    var contrastPivotMapping = {
        "prad_wcdt" : {
            "Liver vs Bone" : {
                "name" : "biopsy_site",
                "datatype" : "clinical",
                "version" : 1
            },
            "Bone vs Liver+Lymph" : {
                "name" : "biopsy_site",
                "datatype" : "clinical",
                "version" : 1
            },
            "path-Small Cell vs path-Adeno" : {
                "name" : "Histology_Call",
                "datatype" : "clinical",
                "version" : 1
            },
            "path-ANCa vs path-Adeno" : {
                "name" : "Trichotomy",
                "datatype" : "clinical",
                "version" : 1
            },
            "Enza-Resistant vs Abi-Resistant" : {
                "name" : "Enzalutamide",
                "datatype" : "clinical",
                "version" : 1
            },
            "Abi-Resistant vs Abi-Naive" : {
                "name" : "Abiraterone",
                "datatype" : "clinical",
                "version" : 1
            },
            "Small Cell vs Not Small Cell" : {
                "name" : "Small_Cell",
                "datatype" : "clinical",
                "version" : 1
            },
            "Histology:Not Small Cell vs  Histology:Small Cell" : {
                "name" : "Small_Cell",
                "datatype" : "clinical",
                "version" : 1
            }
        }
    };

    var contrastData;
    var cursor = Contrast.find({
        "_id" : contrastId,
        "studyID" : studyId
    }, {
    });
    var docs = cursor.fetch();
    if (docs.length > 1) {
        console.log("WARNING", "multiple contrasts have _id:", contrastId);
    }
    if (docs.length > 0) {
        contrastData = docs[0];
    }

    if ((!_.isUndefined(contrastPivotMapping[studyId])) && (!_.isUndefined(contrastData))) {
        var mappings = contrastPivotMapping[studyId];
        var contrastName = contrastData["name"];
        contrastName = contrastName.trim();
        if ( contrastName in mappings) {
            contrastData["pivotObj"] = mappings[contrastName];
        }
    }
    return contrastData;
};

/**
 *Classify events by type... so we'll know what mongo collection to get the data from.
 */
var classifyLockedEvents = function(lockedEventsObj) {
    var classifiedEvents = {
        "clinical" : [],
        "expression" : [],
        "mutation" : [],
        "signature" : [],
        "unknown" : []
    };

    // classify locked events
    _.each(lockedEventsObj, function(value, key) {
        switch(key.toLowerCase()) {
            case "clinical data":
                classifiedEvents["clinical"] = _.union(classifiedEvents["clinical"], value);
                break;
            case "expression data":
                // classifiedEvents["expression"] = _.union(classifiedEvents["expression"], _.map(value, function(eventName) {
                // // get gene name
                // return eventName.replace(/_mRNA$/, "");
                // }));
                classifiedEvents["expression"] = _.union(classifiedEvents["expression"], value);
                break;
            case "mutation call":
                // classifiedEvents["mutation"] = _.union(classifiedEvents["mutation"], _.map(value, function(eventName) {
                // // get gene name
                // return eventName.replace(/_mutation$/, "");
                // }));
                classifiedEvents["mutation"] = _.union(classifiedEvents["mutation"], value);
                break;
            case "kinase target activity":
                classifiedEvents["signature"] = _.union(classifiedEvents["signature"], value);
                break;
            case "tf target activity":
                classifiedEvents["signature"] = _.union(classifiedEvents["signature"], value);
                break;
            case "expression signature":
                classifiedEvents["signature"] = _.union(classifiedEvents["signature"], value);
                break;
            case "mvl drug sensitivity":
                classifiedEvents["signature"] = _.union(classifiedEvents["signature"], value);
                break;
            default:
                classifiedEvents["unknown"] = _.union(classifiedEvents["unknown"], value);
        }
    });

    return classifiedEvents;
};

/**
 * correlatorResults publication
 *
 * parameter "geneList" is for specifying a geneList manually selected, ie. not via correlator.
 */
// Meteor.publish("correlatorResults", function(pivotName, pivotDatatype, pivotVersion, Study_ID, selectedContrast, pagingConfig, nonCorrGeneList) {
Meteor.publish("correlatorResults", function(pivotName, pivotDatatype, pivotVersion, Study_ID, selectedContrast, pagingConfig, sessionGeneLists, lockedEvents) {
    var s = "<--- publish correlatorResults in server/publish/correlator.js";
    console.log("	", "BEGIN", s);
    var pageSize = 5;
    var cursors = [];

    // handle eventIds in lockedEvents parameter
    var classifiedLockedEvents = classifyLockedEvents(lockedEvents);

    if (sessionGeneLists == null) {
        sessionGeneLists = {};
    }

    var nonCorrGeneList = _.union.apply(this, (_.values(sessionGeneLists)));

    // clinical events
    var clinicalEventsCursor = ClinicalEvents.find({
        "study" : Study_ID
    });
    cursors.push(clinicalEventsCursor);

    console.log("arguments", pivotName, pivotDatatype, pivotVersion, Study_ID, selectedContrast, pagingConfig, nonCorrGeneList, lockedEvents, s);

    var contrastData = getContrastData(Study_ID, selectedContrast);
    if (!_.isUndefined(contrastData) && _.isNull(pivotName) && _.isNull(pivotDatatype) && _.isNull(pivotVersion)) {
        if ("pivotObj" in contrastData) {
            console.log(contrastData["name"], "using pre-mapped pivotObj for contrast", contrastData["pivotObj"]);
            var contrastPivotObj = contrastData["pivotObj"];
            pivotName = contrastPivotObj["name"];
            pivotDatatype = contrastPivotObj["datatype"];
            pivotVersion = contrastPivotObj["version"];
        }
    }

    var nonCorrSigNames = getSignatureNamesForGenes(nonCorrGeneList);
    // console.log("nonCorrSigNames", nonCorrSigNames);

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
    correlatorIds = correlatorIds.concat(expr_ids_top);

    if (pivotDatatype !== "clinical") {
        var expr_ids_bottom = getCorrelatorIds_forExpr(pivotName, pivotDatatype, pivotVersion, "asc", pageSize, skipCount["expression data"]["tail"]);
        correlatorIds = correlatorIds.concat(expr_ids_bottom);
    }

    // signature correlator _ids
    var sig_ids = getCorrelatorIds_forSign(pivotName, pivotDatatype, pivotVersion, skipCount);

    correlatorIds = correlatorIds.concat(sig_ids);
    // console.log("correlatorIds", correlatorIds.length, s);

    // get correlator scores
    var correlatorCursor = getCorrelatorCursorByMongoId(correlatorIds);
    cursors.push(correlatorCursor);
    // console.log("correlatorCursor", correlatorCursor.fetch().length, s);

    // separate correlator scores by datatype
    var eventsByType = separateCorrelatorScoresByDatatype(correlatorCursor);

    // get expression values from Mongo collection
    if (eventsByType.hasOwnProperty("expression") || nonCorrGeneList.length != 0 || classifiedLockedEvents["expression"].length > 0) {
        var corrExpEvents = eventsByType["expression"];
        var geneList = _.pluck(corrExpEvents, "name");
        // console.log("geneList", geneList.length, s);

        // add nonCorrGeneList to the results
        geneList = geneList.concat(nonCorrGeneList);
        // console.log("geneList", geneList.length, "after adding nonCorrGeneList", s);

        var mappedList = _.map(classifiedLockedEvents["expression"], function(eventName) {
            return eventName.replace(/_mRNA$/, "");
        });

        var expressionGeneList = _.union(geneList, mappedList);

        // console.log("expressionGeneList", expressionGeneList);

        var expression2Cursor = Expression2.find({
            'gene' : {
                "$in" : expressionGeneList
            },
            'Study_ID' : Study_ID
        });
        cursors.push(expression2Cursor);

        // console.log("expression2Cursor", expression2Cursor.fetch().length, s);

        mappedList = _.map(classifiedLockedEvents["mutation"], function(eventName) {
            return eventName.replace(/_mutation$/, "");
        });

        var mutationGeneList = _.union(geneList, mappedList);

        var mutationsCursor = Mutations.find({
            "gene_label" : {
                "$in" : mutationGeneList
            }
        });
        cursors.push(mutationsCursor);
    }

    // get signature scores from Mongo collection
    if (eventsByType.hasOwnProperty("signature") || nonCorrSigNames.length != 0 || classifiedLockedEvents["signature"].length > 0) {
        var corrSigEvents = eventsByType["signature"];
        var sigNames = _.map(corrSigEvents, function(element) {
            var name = element["name"];
            var version = element["version"];
            return name + "_v" + version;
        });

        // console.log("sigNames", sigNames.length, s);

        // add nonCorrSigNames to the results
        sigNames = _.union(sigNames, nonCorrSigNames, classifiedLockedEvents["signature"]);
        // console.log("sigNames", sigNames.length, "after adding nonCorrSigNames", s);

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

    // console.log("cursors", cursors.length, pivotName, s);
    console.log("	", "END", s);

    return cursors;
});
