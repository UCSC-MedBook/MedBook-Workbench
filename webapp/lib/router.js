FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render("appBody", {content: "pageNotFound"});
  }
};

var workbench = FlowRouter.group({
  prefix: "/Workbench"
});

workbench.route("/", {
  name: "welcome",
  action: function() {
    BlazeLayout.render("appBody", {content: "welcome"});
  }
});

workbench.route("/history", {
  name: "history",
  action: function() {
    BlazeLayout.render("appBody", {content: "history"});
  }
});

workbench.route("/limma", {
  name: "limma",
  action: function() {
    BlazeLayout.render("appBody", {content: "limma"});
  }
});

var testing = workbench.group({
  prefix: "/testing"
});

testing.route("/removeData", {
  action: function () {
    Meteor.call("removeData", function (error) {
      if (error) {
        console.log("error:", error);
      } else {
        BlazeLayout.render("appBody", {content: "actionDone"});
      }
    });
  }
});
