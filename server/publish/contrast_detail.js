/*****************************************************************************/
/* ContrastDetail Publish Functions
/*****************************************************************************/

Meteor.publish('contrast_detail', function () {
  // you can remove this if you return a cursor
  return ContrastDetails.find();
});
