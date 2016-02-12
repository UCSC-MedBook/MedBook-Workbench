// so that it runs after lib/globals.js has loaded
Meteor.startup(function () {
  Template.registerHelper("WorkbenchJobs", WorkbenchJobs);
});

Template.registerHelper("labelClass", lodash.constant("col-md-3 col-sm-4 col-xs-6"));
Template.registerHelper("inputColClass", lodash.constant("col-md-9 col-sm-8 col-xs-6"));
