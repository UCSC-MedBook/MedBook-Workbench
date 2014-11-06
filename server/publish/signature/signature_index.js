/*****************************************************************************/
/* SignatureIndex Publish Functions
/*****************************************************************************/

Meteor.publish('signature_index', function () {
  // you can remove this if you return a cursor
  var sg = Signature.find();
  var cnt = Signature.find().count();
  console.log('Signature count', cnt);
  return sg;
});
