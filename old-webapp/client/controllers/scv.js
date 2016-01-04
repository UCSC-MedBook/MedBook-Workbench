ScvController = RouteController.extend({
  waitOn: function () {
	  Meteor.subscribe('sample_groups_index');
  },

  data: function () {
	  var id = this.params._id;
	  var g1 = this.params.g1;
	  var g2 = this.params.g2;
	  var query = this.params.query;
	  console.log('ROUTER query', query);
	  var studyID = Session.get('studyID');
	  if (this.params.length > 0) {
		  console.log('scv: group1: '+g1+' group2: '+g2);
	  }
	  if (query.contrast) {
		  id = query.contrast;
		  Session.set('selectedContrast', id);
	  }
	  if (id) {
		  return {
			  contrast: function() {
				  return Contrast.find({_id:id}) ;
			  },
			  results: function() {
          console.log('fetching jobs in scv controller for contrast_id', id);
				  return Jobs.find({"args.contrast_id":id}) ;
			  }
		  };
	  }
	  else {
      console.log("no contrast found in scv controller");
  	  return {
  	  	contrast: function() {
  	  				  return Contrast.find({}) ;
  	  	},
    		results: {}
      }	  ;
    }
  },
  edit: function() {
	  console.log('editing mode');
	  this.state.set('isEditing', true);
	  this.render('ScvContrast');
  },
  action: function () {
    this.render();
  }
});
