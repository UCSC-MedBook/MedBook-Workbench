Meteor.methods({
  // testing methods
  removeData: function () {
    user_id = ensureLoggedIn();
    var user = Meteor.users.findOne(user_id);

    console.log("user.profile.collaborations:", user.profile.collaborations);
    if (user.profile.collaborations.indexOf("testing") >= 0) {
      console.log("removing data for user ", user_id);

      Meteor.users.update(user_id, {
        $unset: {
          "profile.workbench": 1
        }
      });

      Jobs.remove({
        user_id: user_id
      });
    } else {
      throw new Meteor.Error("not in testing collaboration");
    }
  }
});
