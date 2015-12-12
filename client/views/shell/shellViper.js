Template.ShellViper.onCreated(function () {
	var instance = this;

	instance.selectedNetwork = new ReactiveVar("selected_network");
  console.log('subscribe networks');
  instance.subscribe('networks');
});
Template.ShellViper.events({
  'click #RunViperJob': function (event, template) {
    //var top_gene_count = template.$("input[type=text]").val();
    //console.log('limma event ', template);
    var permutations = template.$("#permutations").val();
    if (!permutations) {
      permutations = 100;
    }
    var network_id = template.$("#network").val();
    console.log('selected network', network_id);
    var args = {
      contrast_id: Session.get('selectedContrast'),
      permutations: permutations,
      network_id: network_id
    };
    console.log('start viper with', args);
    Meteor.call('insert_viper_job', args);
  }
});

Template.ShellViper.helpers({
  selectedNetwork: function() {
    return Template.instance().selectedNetwork;
  },
  networks: function() {
    return Networks.find({},{sort: {name:1}});
  },

});
