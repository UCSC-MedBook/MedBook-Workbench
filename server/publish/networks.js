Meteor.publish('networks', function () {
  // you can remove this if you return a cursor
  var user = Meteor.users.findOne(this.userId);
  var collab = user.profile.collaborations;
  return Networks.find({collaborations:{$in:collab}});
});
