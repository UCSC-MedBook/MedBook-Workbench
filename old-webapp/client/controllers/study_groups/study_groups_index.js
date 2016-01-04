StudyGroupsIndexController = RouteController.extend({
  waitOn: function () {
	   Meteor.subscribe('study_groups_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
