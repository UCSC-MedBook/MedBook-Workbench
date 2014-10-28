Meteor.startup(function () {
	console.log('startup');
	Meteor.subscribe('studies_index');
	Meteor.subscribe('study_groups_index');
	Meteor.subscribe('clinical_events_index');
	Meteor.subscribe('contrast');	
	Session.set('selectedContrast','')
});