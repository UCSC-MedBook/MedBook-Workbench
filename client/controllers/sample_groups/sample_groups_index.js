SampleGroupsIndexController = RouteController.extend({
  waitOn: function () {
	    Meteor.subscribe('sample_groups_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
