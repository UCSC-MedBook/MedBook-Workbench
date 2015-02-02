/*****************************************************************************/
/* SignatureScoresIndex Publish Functions
 /*****************************************************************************/

Meteor.publish('signature_scores_index', function() {
    // you can remove this if you return a cursor
    var s = SignatureScores.find();
    var cnt = s.count();
    console.log('SignatureScores count', cnt, '<-- publish signature_scores_index');
    return s;

});
