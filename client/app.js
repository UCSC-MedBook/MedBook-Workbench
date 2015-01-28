/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/

_.extend(App, {
});

App.helpers = {
	selectedStudy: function () {
		return Session.get('studyID');
	}
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});
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
	Meteor.subscribe('expression2');
	Meteor.subscribe('gene_sets_index');
	//Meteor.subscribe('signature_index');
	Session.set('selectedContrast','')
	console.log('startup complete')
});
