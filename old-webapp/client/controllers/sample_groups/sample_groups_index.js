SampleGroupsIndexController = RouteController.extend({
  waitOn: function () {
	    Meteor.subscribe('sample_groups_index');
  },

  data: function () {
	  var params = this.params;
	  group_name = this.params.name;
	  console.log('sample group: ', params.name);
  },

  action: function () {
    this.render();
  }
});
