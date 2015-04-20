Meteor.startup(function () {
       console.log('client/controllers/startup');
       Meteor.subscribe('study_groups_index');
       Meteor.subscribe('studies_index');
       Meteor.subscribe('clinical_events_index');
       Meteor.subscribe('contrast');
       Meteor.subscribe('images');
       Meteor.subscribe('blobs');
       Meteor.subscribe('results');
       Meteor.subscribe('gene_sets_index');
       //Meteor.subscribe('signature_index');
       Session.set('selectedContrast','')

});
