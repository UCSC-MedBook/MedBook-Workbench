/*****************************************************************************/
/* ClinicalEventsIndex Publish Functions
 /*****************************************************************************/

Meteor.publish('clinical_events_index', function() {
    var findResults = ClinicalEvents.find();
    var count = findResults.count();
    console.log('ClinicalEvents count', count, '<-- publish clinical_events_index');
    return findResults;
});