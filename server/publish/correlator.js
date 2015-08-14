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
    for (var i = 0, length = correlatorDocs.length; i < length; i++) {
        var doc = correlatorDocs[i];
        var name = doc["name_2"];
        var datatype = doc["datatype_2"];
        var version = doc["version_2"];
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
 * Get top/bottom correlator scores
 */
var getCorrelatorCursor = function(pivotName, pivotDatatype, pivotVersion, limit) {
    // get correlator scores from Mongo collection
    var correlatorCursor = Correlator.find({
        "name_1" : pivotName,
        "datatype_1" : pivotDatatype,
        "version_1" : pivotVersion,
        // "datatype_2" : "signature"
        // "datatype_2" : "expression"
    }, {
        "sort" : ["score", "desc"],
        "limit" : limit,
        "skip" : 0
    });

    return correlatorCursor;
};

/**
 * correlatorResults publication
 */
Meteor.publish("correlatorResults", function(pivotName, pivotDatatype, pivotVersion, Study_ID) {
    var s = "<--- publish correlatorResults in server/publish/correlator.js";
    var correlatorLimit = 99;
    var cursors = [];

    // clinical events
    var clinicalEventsCursor = ClinicalEvents.find({
        "study" : Study_ID
    });
    cursors.push(clinicalEventsCursor);

    // get correlator scores from Mongo collection
    var correlatorCursor = getCorrelatorCursor(pivotName, pivotDatatype, pivotVersion, correlatorLimit);
    cursors.push(correlatorCursor);

    console.log("correlatorCursor", correlatorCursor.length, s);

    // separate correlator scores by datatype
    var eventsByType = separateCorrelatorScoresByDatatype(correlatorCursor);

    // inject some genes for testing
    // eventsByType["expression"] = [{
    // "name" : "PLK1"
    // }, {
    // "name" : "TP53"
    // }];

    // inject some signatures for testing
    // eventsByType["signature"] = [{
    // "name" : "MAP3K8_kinase_viper",
    // "version" : 5
    // }, {
    // "name" : "AURKB_kinase_viper",
    // "version" : 5
    // }];

    console.log("eventsByType", eventsByType, s);

    // get expression values from Mongo collection
    if (eventsByType.hasOwnProperty("expression")) {
        var corrExpEvents = eventsByType["expression"];
        var geneList = _.pluck(corrExpEvents, "name");
        console.log("geneList", geneList, s);
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
        var signatureScoresCursor = SignatureScores.find({
            'name' : {
                "$in" : sigNames
            }
        });
        cursors.push(signatureScoresCursor);
    }

    console.log("cursors", cursors, cursors.length, s);

    return cursors;
});
