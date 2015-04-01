/*****************************************************************************/
/* Expression2 Publish Functions
/*****************************************************************************/

Meteor.publish('expression2', function () {
  // you can remove this if you return a cursor
  return Expression2.find();
});