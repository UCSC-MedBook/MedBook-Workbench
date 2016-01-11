Meteor.publish("contrasts", function () {
  var user = Meteor.users.findOne(this.userId);

  return Contrasts.find({
    collaborations: { $in: user.profile.collaborations }
  });
});

Meteor.publish("jobs", function (name) {
  return Jobs.find({
    user_id: this.userId,
    name: name,
  });
});

Meteor.publish("blob", function (blobId) {
  return Blobs.find({
    _id: blobId,
    "metadata.user_id": this.userId
  });
});
