// Template.limma

Template.limma.helpers({
  jobSchema: function () {
    return JobClasses.RunLimma.schema;
  },
});

// Template.contrastField

Template.contrastField.onCreated(function () {
  var instance = this;

  instance.subscribe("contrasts");
});

Template.contrastField.helpers({
  labelOptions: function () {
    var labels = Contrasts.find().map(function (contrast) {
      return {
        label: contrast.contrast_label,
        value: contrast.contrast_label,
      };
    });
    return _.uniq(labels);
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
