
/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
  'change #study': function(event,template){
	  Session.set('studyID', event.currentTarget.value);
	  this.currStudy = event.currentTarget.value;
	  console.log('Session studyID:', Session.get('studyID'));
	},
    'click #job': function(event,template){
  	  //Session.set('studyID', event.currentTarget.value);
	  Meteor.call('runshell', 'ls', function(err,response) {
	  			if(err) {
	  				Session.set('serverDataResponse', "Error:" + err.reason);
	  				return;
	  			}
	  			Session.set('serverDataResponse', response);
	  		});
  	  console.log('shell:');
  	} 
  
});

Template.MasterLayout.helpers({
	studies: function(){
		return Studies.find({},{sort: {short_name:1}});
	}
  
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
};

Template.MasterLayout.rendered = function () {
	$(function() {
	 $( "#tabs" ).tabs();
	});
};

Template.MasterLayout.destroyed = function () {
};


