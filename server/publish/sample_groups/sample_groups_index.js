/*****************************************************************************/
/* SampleGroupsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('sample_groups_index', function () {
  // you can remove this if you return a cursor
  var sg = SampleGroups.find();
  var cnt = SampleGroups.find().count();
  console.log('SampleGroups count', cnt);
  return sg;
});
