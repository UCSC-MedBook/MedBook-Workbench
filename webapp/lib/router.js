FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render("appBody", {content: "pageNotFound"});
  }
};

FlowRouter.route("/", {
  name: "welcome",
  action: function() {
    BlazeLayout.render("appBody", {content: "welcome"});
  }
});

FlowRouter.route("/history", {
  name: "history",
  action: function() {
    BlazeLayout.render("appBody", {content: "history"});
  }
});

FlowRouter.route("/limma", {
  name: "limma",
  action: function() {
    BlazeLayout.render("appBody", {content: "limma"});
  }
});

FlowRouter.route("/nOfOne", {
  name: "nOfOne",
  action: function() {
    BlazeLayout.render("appBody", {content: "nOfOne"});
  }
});

var testing = FlowRouter.group({
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
