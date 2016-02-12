// Template.jobsBrowser

Template.jobsBrowser.onCreated(function () {
  var instance = this;

  instance.selectedJob = new ReactiveVar(null);

  // The observe is called from within a Tracker.autorun so that it is
  // stopped automatically when the autorun is stopped.
  // http://docs.meteor.com/#/full/observe
  instance.autorun(function () {
    Jobs.find({}, { sort: { date_created: -1 } }).observe({
      addedAt: function (doc, index) {
        if (index === 0) {
          instance.selectedJob.set(doc._id);
        }
      },
      movedTo: function (doc, fromIndex, toIndex, before) {
        // When new documents come in, they're added to the end and then
        // moved to the beginning.
        if (toIndex === 0) {
          instance.selectedJob.set(doc._id);
        }
      },
    });
  });
});

Template.jobsBrowser.helpers({
  selectedJob: function () {
    return Jobs.findOne(Template.instance().selectedJob.get());
  },
});

// Template.listAllJobs

Template.listAllJobs.onCreated(function () {
  var instance = this;

  instance.subscribe("jobs");
});

Template.listAllJobs.helpers({
  getJobs: function () {
    return Jobs.find({}, { sort: { date_created: -1 } });
  },
});

// Template.listJob

Template.listJob.helpers({
  getTitle: function (name) {
    return WorkbenchJobs[name].title;
  },
  active: function () {
    if (Template.instance().parent(2).selectedJob.get() === this._id) {
      return "active";
    }
  },
  statusClass: function () {
    if (this.status === "done") {
      return "list-group-item-success";
    } else if (this.status === "error") {
      return "list-group-item-danger";
    } else {
      return "list-group-item-info";
    }
  },
  getInfo: function () {
    if (this.name === "RunLimma") {
      return [
        { key: "Top gene count", value: this.args.topGeneCount },
        { key: "Contrast name", value: this.args.contrast_label },
        { key: "Contrast version", value: this.args.contrast_version },
        { key: "Correction method", value: this.args.correction_method },
      ];
    } else if (this.name === "UpDownGenes") {
      var info = [
        {
          key: "Reference sample count",
          value: this.args.reference_samples_count
        },
      ];

      if (this.args.reference_sample_group_id) {
        Array.prototype.push.apply(info, [
          {
            key: "Reference name",
            value: this.args.reference_sample_group_label
          },
          {
            key: "Reference version",
            value: this.args.reference_sample_group_version
          },
        ]);
      } else {
        Array.prototype.push.apply(info, [
          { key: "Reference sample group", value: "N/A" },
        ]);
      }

      return info;
    } else {
      return [
        { key: "Unknown job", value: "add to the getInfo helper!" }
      ];
    }
  },
});

Template.listJob.events({
  "click .select-job": function (event, instance) {
    instance.parent(2).selectedJob.set(instance.data._id);
  },
});

// Template.showJobResult

Template.showJobResult.onRendered(function () {
  $('#affix-job-output #job-result').affix({
    offset: {
      top: 59,
    }
  });
});

// Template.outputBlob

Template.outputBlob.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
    instance.subscribe("blob", Template.currentData().blob_id);
  });
});

function getBlobUrl(blobId) {
  var blob = Blobs.findOne(this.blob_id);
  if (blob) {
    return blob.url();
  }
}

Template.outputBlob.helpers({
  canWrangle: function () {
    var blob = Blobs.findOne(this.blob_id);
    if (blob) {
      return blob.metadata.wrangler_file_options;
    }
  },
  getBlobUrl: getBlobUrl,
});

Template.outputBlob.events({
  "click .view-in-new-tab": function (event, instance) {
    window.open(getBlobUrl.call(instance.data));
  },
  "click .wrangle-file": function (event, instance) {
    // var wranglerUrl = Meteor.settings.public.medbook_apps.Wrangler.url;
    wrangler = DDP.connect("http://localhost:3002/"); // URL of wrangler app
    // "login" is the method that Meteor uses internally to log in
    wrangler.call("login", {
      resume: Accounts._storedLoginToken()
    }, function (error, result) {
      if (error) {
        sAlert.error("There was a problem connecting to the Wrangler app: " +
            error.error);
        console.log("error:", error);
        return;
      }

      // creates a new submission
      wrangler.call("addSubmission", [instance.data.blob_id], function (error, result) {
        if (error) {
          sAlert.error("There was a problem creating the Wrangler submission: " +
              error.error);
          console.log("error:", error);
        } else {
          sAlert.success("Created submission in Wrangler");
        }

        wrangler.disconnect(); // TODO: don't know if I need this
      });
    });
  },
});
