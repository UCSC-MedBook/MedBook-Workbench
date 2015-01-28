ClinicalEventsIndexController = RouteController.extend({
  waitOn: function () {
	  //Meteor.subscribe('clinical_events_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
