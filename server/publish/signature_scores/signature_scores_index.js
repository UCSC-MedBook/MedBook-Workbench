/*****************************************************************************/
/* SignatureScoresIndex Publish Functions
 /*****************************************************************************/

Meteor.publish('signature_scores_index', function(sigNames) {
    var s = '<--- publish signature_scores_index in server/publish/signature_scores/signature_scores_index.js';

    if (!sigNames) {
        sigNames = [];
    }

    var findResult = SignatureScores.find({
        'name' : {
            $in : sigNames
        }
    });
    console.log('SignatureScores count', findResult.count(), s);
    return findResult;
});
