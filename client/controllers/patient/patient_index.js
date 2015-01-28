PatientIndexController = RouteController.extend({
  waitOn: function () {
	  var study = Session.get('studyID');
	  var name = this.params.name;
	  Meteor.subscribe('mutations_sample', study,name);
	  
  },

  data: function () {
	  var study = Session.get('studyID');
	  var name = this.params.name;
	  var m = Mutations.find({study:study,name:name});
	  console.log('mutation count for '+name+' is '+Mutations.find({study:study,name:name}).count());
	  return m;
  },

  action: function () {
    this.render();
  }
});
