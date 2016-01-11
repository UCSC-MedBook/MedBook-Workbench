Meteor.methods({
  addLimmaJob: function (args) {
    var user_id = ensureLoggedIn();

    Jobs.insert({
      name: "RunLimma",
      user_id: user_id,
      args: args,
    });
  },
});
