ensureLoggedIn = function() {
  var user_id = Meteor.user() && Meteor.user()._id;
  if (!user_id) {
    throw new Meteor.Error(403, "not-logged-in", "Log in to proceed");
  }
  return user_id;
};

JobClasses = {
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
};
