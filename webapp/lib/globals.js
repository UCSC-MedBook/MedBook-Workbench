ensureLoggedIn = function() {
  var user_id = Meteor.user() && Meteor.user()._id;
  if (!user_id) {
    throw new Meteor.Error(403, "not-logged-in", "Log in to proceed");
  }
  return user_id;
};

WorkbenchJobs = {
  RunLimma: {
    title: "Limma",
    description: "Linear Models for Microarray Data",
    schema: new SimpleSchema({
      topGeneCount: {
        type: Number,
        min: 1,
        label: "Top gene count",
      },
      contrast_label: {
        type: String,
        label: "Contrast name",
      },
      contrast_version: {
        type: Number,
        label: "Contrast version",
      },
      correction_method: {
        type: String,
        allowedValues: [
          "BH",
          "none",
        ]
      },
    }),
  },
  UpDownGenes: {
    title: "Up/down genes",
    description: "List the up/down-regulated genes in a sample",
    schema: new SimpleSchema({
      reference_samples: {
        type: [
          new SimpleSchema({
            study_label: { type: String },
            sample_label: { type: String },
            patient_label: { type: String, optional: true },
          })
        ]
      },
      reference_sample_group_id: { type: String, optional: true },
      test_sample_id: { type: String },

      // for UI optimization (don't have to load reference_samples)
      reference_samples_count: { type: Number, min: 1 },

      // don't have to do a join
      reference_sample_group_label: { type: String, optional: true },
      reference_sample_group_version: { type: String, optional: true },
    }),
  }
};
