// Template.welcome

Template.welcome.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
    var user = Meteor.user();
    if (user && user.profile && user.profile.workbench &&
        user.profile.workbench.neverShowWelcome) {
      FlowRouter.go("history");
    }
  });
});

Template.welcome.events({
  "click #close-welcome-forever": function () {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        "profile.workbench.neverShowWelcome": true
      }
    });
  },
});
