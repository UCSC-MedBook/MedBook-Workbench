// db.mutations.find({"MA_FImpact":{$in:["medium","high"]}, "Study_ID":"prad_wcdt"})

Meteor.publish('mutations_cohort', function(studyId, geneList) {
    var s = "<--- publish mutations_cohort in server/publish/mutations/mutations_cohort.js";

    var queryParams = {
        "MA_FImpact" : {
            $in : ["medium", "high"]
        },
        "Study_ID" : studyId,
        "Hugo_Symbol" : {
            $in : geneList
        }
    };

    var findResults = Mutations.find(queryParams);

    console.log('mutations_cohort count:', findResults.count(), s);

    return findResults;
});
