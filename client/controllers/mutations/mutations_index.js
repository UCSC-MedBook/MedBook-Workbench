MutationsIndexController = RouteController.extend({
  waitOn: function () {
	  	  Meteor.subscribe('mutations_index', this.params.study);
  },

  data: function () {
	  var study = this.params.study;
	  return Mutations.findOne({study:study});
  },

  action: function () {
    this.render();
  }
});
