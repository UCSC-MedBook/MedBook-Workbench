/*****************************************************************************/
/* Contrast Publish Functions
/*****************************************************************************/

Meteor.publish('contrast', function () {
  // you can remove this if you return a cursor
  return Contrast.find();
});
