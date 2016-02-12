// Template.nOfOne

Template.nOfOne.onCreated(function () {
  var instance = this;

  instance.submitError = new ReactiveVar(null);

  instance.getSampleGroup = function () {
    return Session.get("upDownSampleGroup");
  };
});

Template.nOfOne.helpers({
  samplesFromSelector: function () {
    var sampleGroup = Template.instance().getSampleGroup();
    if (sampleGroup) {
      return sampleGroup.samples;
    }
  },
  sampleGroupId: function () {
    var sampleGroup = Template.instance().getSampleGroup();
    if (sampleGroup) {
      return sampleGroup._id; // could be null
    }
  },
  submitError: function () {
    return Template.instance().submitError.get();
  },
});

Template.nOfOne.events({
  "click #newFindUpDownGenes": function (event, instance) {
    event.preventDefault();

    // clear any previous error
    instance.submitError.set(null);

    var sampleGroup = instance.getSampleGroup();
    var testSample = Session.get("testSample");

    // verify we have the info we need
    if (!sampleGroup || !sampleGroup.samples) {
      instance.submitError.set("Select a reference cohort to continue.");
      return;
    }
    if (!testSample) {
      instance.submitError.set("Select a test sample to continue.");
      return;
    }

    var jobOptions = {
      reference_samples: sampleGroup.samples,
      reference_sample_group_id: sampleGroup._id,
      test_sample_id: testSample._id,
    };
    console.log("jobOptions:", jobOptions);

    Meteor.call("addUpDownGenesJob", jobOptions, function (error, result) {
      if (error) {
        instance.submitError.set("Internal error adding job.");
      }
    });
  },
  "click .close-submit-error": function (event, instance) {
    instance.submitError.set(null);
  },
});

// Template.sampleWidget

Template.sampleWidget.onCreated(function () {
  var instance = this;

  // keep track of these through "change" events hooked up to the selects
  instance.selectedStudy = new ReactiveVar(null);
  instance.selectedSample = new ReactiveVar(null);

  // subscribe to all available studies
  // doesn't have to be a ReactiveVar because the value won't change and the
  // value's ready function is reactive.
  instance.studiesSubscription = instance.subscribe("studies");

  // this one has to be reactive because the subscription will change
  instance.samplesSubscription = new ReactiveVar(null);

  // subscribe to the samples for the selected study
  instance.autorun(function () {
    var subscription = null; // default value
    var study_label = instance.selectedStudy.get();

    // only subscribe if a study is selected
    if (study_label) {
      subscription = instance.subscribe("samplesFromStudy", study_label);
    }

    instance.samplesSubscription.set(subscription);
  });

  // set the Session variable to the currently selected sample
  instance.autorun(function () {
    var study_label = instance.selectedStudy.get();
    var sample_label = instance.selectedSample.get();

    var sample = null; // default value for Session variable
    if (study_label && sample_label) {
      sample = Samples.findOne({
        study_label: study_label,
        sample_label: sample_label,
      });
    }

    Session.set(instance.data, sample);
  });
});

Template.sampleWidget.helpers({
  studiesLoaded: function () {
    return Template.instance().studiesSubscription.ready();
  },
  samplesLoaded: function () {
    var subscription = Template.instance().samplesSubscription.get();
    console.log("subscription:", subscription);
    if (subscription) {
      return subscription.ready();
    }
  },
  getStudies: function () {
    return Studies.find({});
  },
  getSamples: function () {
    return Samples.find({});
  },
  selectedStudy: function () {
    return Template.instance().selectedStudy.get();
  },
});

Template.sampleWidget.events({
  "change .select-study": function (event, instance) {
    instance.selectedStudy.set(event.target.value);

    // unset selected sample
    instance.selectedSample.set(null);
  },
  "change .select-sample": function (event, instance) {
    instance.selectedSample.set(event.target.value);
  },
});
