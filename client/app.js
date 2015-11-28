/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
Meteor.startup(function() {
    console.log('client/app.js startup begin');
    Meteor.subscribe('studies_index');
    Meteor.subscribe('study_groups_index');
    Meteor.subscribe('clinical_events_index');
    Meteor.subscribe('contrast');
    Meteor.subscribe('images');
    Meteor.subscribe('blobs');
    var job_ret = Meteor.subscribe('jobs', function(res) {
        console.log("jobs sub 1", res);
      },
      function(res){
        if (res) {
          console.log("jobs sub 2", res);
        }
        else {
          console.log("jobs sub 2");
        }
      }
    );
    console.log('jobs subscribe returns ', job_ret);
    // Meteor.subscribe('expression2');
    Meteor.subscribe('gene_sets_index');
    Meteor.subscribe('genes');
    Meteor.subscribe('studies');

    //Meteor.subscribe('signature_index');
    Session.set('selectedContrast', '');
    console.log('/client/app.js startup complete');
});

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
