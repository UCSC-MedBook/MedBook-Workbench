/*****************************************************************************/
/* SignatureScoresIndex Publish Functions
/*****************************************************************************/

Meteor.publish('signature_scores_index', function () {
  // you can remove this if you return a cursor
  var s = SignatureScores.find();
  var cnt = SignatureScores.find().count();
  console.log('SignatureScores count', cnt);
  return s;
  
});
