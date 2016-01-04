ResultsController = RouteController.extend({
  waitOn: function () {

  },

  data: function () {
    console.log('results controller data this', this);
    result_id = this.params._id;
		if (result_id) {
			Session.set('selectedResult', result_id)
		}
  },

  action: function () {
    this.render();
  }
});
