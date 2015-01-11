Meteor.startup(function () {
	console.log('startup');
	Meteor.subscribe('studies_index');
	Meteor.subscribe('study_groups_index');
	Meteor.subscribe('clinical_events_index');
	Meteor.subscribe('contrast');	
	Meteor.subscribe('images');
	Meteor.subscribe('blobs');
	Meteor.subscribe('signature_index');
	Meteor.subscribe('signature_scores_index');
	Meteor.subscribe('results');
	Session.set('selectedContrast','')
	
});