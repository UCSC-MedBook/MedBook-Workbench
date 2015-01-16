ScvController = RouteController.extend({
  waitOn: function () {	
	  Meteor.subscribe('sample_groups_index');
  },

  data: function () {
	  var id = this.params._id;
	  var g1 = this.params.g1;
	  var g2 = this.params.g2;
	  var tool = this.params.hash;
	  Session.set('selectedContrast', id);
	  var studyID = Session.get('studyID');	
	  if (this.params.length > 0) {
		  console.log('scv: group1: '+g1+' group2: '+g2);
	  }
	  return {
		  contrast: function() {
			  return Contrast.find({_id:id}) 
		  },
		  results: function() {
			  return Results.find({contrast:id}) 
		  }
	  }
  },

  action: function () {
    this.render();
  }
});
