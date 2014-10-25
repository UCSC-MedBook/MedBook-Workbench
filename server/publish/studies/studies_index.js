/*****************************************************************************/
/* StudiesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('studies_index', function () {
  var s = Studies.find();
  var cnt = Studies.find().count();
  console.log('studies count', cnt);
  return s;
  //this.ready();
});
