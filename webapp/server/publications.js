Meteor.publish("contrasts", function () {
  var user = MedBook.ensureUser(this.userId);

  return Contrasts.find({
    collaborations: { $in: user.getCollaborations() }
  });
});

Meteor.publish("jobs", function () {
  var names = Object.keys(WorkbenchJobs);

  return Jobs.find({
    user_id: this.userId,
    name: { $in: names },
  });
});

Meteor.publish("blob", function (blobId) {
  return Blobs.find({
    _id: blobId,
    "metadata.user_id": this.userId
  });
});

Meteor.publish("studies", function () {
  var user = MedBook.ensureUser(this.userId);

  return Studies.find({
    collaborations: {
      $in: user.getCollaborations()
    }
  });
});

Meteor.publish("samplesFromStudy", function (study_label) {
  var user = MedBook.ensureUser(this.userId);
  var study = Studies.findOne({study_label: study_label});
  user.ensureAccess(study);

  return Samples.find({
    study_label: study_label
  });
});
