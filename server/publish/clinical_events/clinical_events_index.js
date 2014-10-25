/*****************************************************************************/
/* ClinicalEventsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('clinical_events_index', function () {
  // you can remove this if you return a cursor
  var c = ClinicalEvents.find();
  var cnt = ClinicalEvents.find().count();
  console.log('ClinicalEvents count', cnt);
  return c;
});