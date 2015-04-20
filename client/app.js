/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/

_.extend(App, {
});

App.helpers = {
    selectedStudy : function() {
        return Session.get('studyID');
    }
};

_.each(App.helpers, function(helper, key) {
    Handlebars.registerHelper(key, helper);
});
Meteor.startup(function() {
    console.log('app.js startup begin');
    Meteor.subscribe('study_groups_index');
    Meteor.subscribe('clinical_events_index');
    Meteor.subscribe('contrast');
    Meteor.subscribe('images');
    Meteor.subscribe('blobs');
    Meteor.subscribe('results');
    // Meteor.subscribe('expression2');
    Meteor.subscribe('gene_sets_index');
    Meteor.subscribe('genes');
    Meteor.subscribe('studies');

    //Meteor.subscribe('signature_index');
    Session.set('selectedContrast', '');
    console.log('app.js startup complete');
});
