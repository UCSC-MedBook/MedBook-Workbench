FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render("appBody", {content: "pageNotFound"});
  }
};

var workbench = FlowRouter.group({
  prefix: "/Workbench"
});

workbench.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("appBody", {content: "home"});
  }
});

workbench.route('/limma', {
  name: "limma",
  action: function() {
    BlazeLayout.render("appBody", {content: "limma"});
  }
});
