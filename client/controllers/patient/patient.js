PatientController = RouteController.extend({
  waitOn: function () {
	  var study = Session.get('studyID');
	  var name = this.params.name;
	  Meteor.subscribe('mutations_sample', study,name);
	  Meteor.subscribe('clinical_events_index');
	  Meteor.subscribe('expression', ['CHGA'])
  },

  data: function () {
	  var study = Session.get('studyID');
	  var name = this.params.name;
	  c = ClinicalEvents.find({'sample':name})
	  var marker = "blue"
	  var chg = Expression2.findOne({'sample':name})
	  try {
		  marker = chg.CHGA
	  }
	  catch(error) {
		  console.log('error',error)
		  marker = error
	  }
	  console.log( name, 'chg:', marker)

	  var m = Mutations.find({study:study,'sample':name,
	    'Variant_Classification':'Missense_Mutation','MA_FImpact':{$in:['high','medium']}},{sort:{'MA_FIS':-1}});
	  var ret = { 'sample':name, 'clin': c, 'mutations': m , 'marker':marker}
	  return ret
  },

  action: function () {
    this.render();
  }
});
