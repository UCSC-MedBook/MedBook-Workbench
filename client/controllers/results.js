ResultsController = RouteController.extend({
  waitOn: function () {
	    
  },

  data: function () {
	    result_id = this.params._id;
		if (result_id) {
			Session.set('selectedResult', result_id)			
		}
  },

  action: function () {
    this.render();
  }
});
