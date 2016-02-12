Meteor.methods({
  addLimmaJob: function (args) {
    var user_id = ensureLoggedIn();

    Jobs.insert({
      name: "RunLimma",
      user_id: user_id,
      args: args,
    });
  },
  addUpDownGenesJob: function (args) {
    var user_id = ensureLoggedIn();

    args.reference_samples_count = args.reference_samples.length;

    if (args.reference_sample_group_id) {
      // TODO: security
      var sampleGroup = SampleGroups.findOne(args.reference_sample_group_id);
      args.reference_sample_group_label = sampleGroup.sample_group_label;
      args.reference_sample_group_version = sampleGroup.sample_group_version;
    }


    Jobs.insert({
      name: "UpDownGenes",
      user_id: user_id,
      args: args,
    });
  },
});
