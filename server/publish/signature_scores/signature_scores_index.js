/*****************************************************************************/
/* SignatureScoresIndex Publish Functions
/*****************************************************************************/

// Meteor.publish('signature_scores_index', function() {
// // you can remove this if you return a cursor
// var s = '<--- publish signature_scores_index in server/publish/signature_scores/signature_scores_index.js';
// var findResult = SignatureScores.find();
// console.log('SignatureScores count', findResult.count(), s);
// return findResult;
//
// });

Meteor.publish('signature_scores_index', function(sigNames) {
    var s = '<--- publish signature_scores_index in server/publish/signature_scores/signature_scores_index.js';

    // console.log('sigNames:', sigNames, s);

    var findResult;
    if (!sigNames) {
        // TODO This limit is enforced to prevent the client from churning on large results.
        // TODO There must be a better way to avoid this problem, such as using a default signature name.
        var limit = 0;
        findResult = SignatureScores.find({
            'name' : {
                $in : []
            }
        }, {
            'limit' : limit
        });
        console.log('NO SIGNATURE NAMES WERE SPECIFIED, limiting to ' + limit + ' results', s);
    } else {
        findResult = SignatureScores.find({
            'name' : {
                $in : sigNames
            }
        });
    }
    console.log('SignatureScores count', findResult.count(), s);
    return findResult;

});
