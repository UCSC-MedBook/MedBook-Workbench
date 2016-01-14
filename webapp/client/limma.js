// Template.limma

Template.limma.helpers({
  jobSchema: function () {
    return WranglerJobs.RunLimma.schema;
  },
});

// Template.contrastField

Template.contrastField.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
    var userId = Meteor.userId();
    instance.subscribe("contrasts");
  });
});

Template.contrastField.helpers({
  labelOptions: function () {
    var uniqueLabels = _.uniq(_.pluck(Contrasts.find().fetch(), "contrast_label"));
    return uniqueLabels.map(function (label) {
      return {
        label: label,
        value: label,
      };
    });
  },
  contrastSelected: function () {
    return AutoForm.getFieldValue(this, "contrast_label");
  },
  versionOptions: function () {
    var contrast_label = AutoForm.getFieldValue(this, "contrast_label");
    return Contrasts.find({
      contrast_label: contrast_label,
    }, {sort: {version: 1}}).map(function (contrast) {
      return {
        label: contrast.version,
        value: contrast.version,
      };
    });
  },
});
