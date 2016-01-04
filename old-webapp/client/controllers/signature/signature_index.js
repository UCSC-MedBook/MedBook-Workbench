SignatureIndexController = RouteController.extend({
  waitOn: function () {
	  var study = Session.get('studyID')
	   Meteor.subscribe('signature_index', study);
  },

  data: function () {
	  	ret = Meteor.call('signature_summary') 
		console.log('sig summary returns', ret)  
		return ret
		  if (err) {
			  console.log('summary of sig failed', err)
			  return;
		  }
  },

  action: function () {
    this.render();
  }
});
