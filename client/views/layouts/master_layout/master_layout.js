
/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
  'change #study': function(event,template){
	  Session.set('studyID', event.currentTarget.value);
	  this.currStudy = event.currentTarget.value;
	  console.log('Session studyID:', Session.get('studyID'));
	},
    'click #home_tab': function(event,template){
		Router.go('/');
    },
    'click #cohort_tab': function(event,template){
 	  	Router.go('/studyGroups/');
    },
 	'click #contrast_tab': function(event,template){
  		Router.go('/scv/');
	},
  	'click #gene_tab': function(event,template){
   		Router.go('/gene/');
    },
   	'click #pathway_tab': function(event,template){
    	Router.go('/pathway/');
    },
	'click #clinical_tab': function(event,template){
	   	Router.go('/clinical/');
	},
    'click #job_tab': function(event,template){
	  	Router.go('/shell/'+'dipsc');
  	  	//Session.set('studyID', event.currentTarget.value);
	  	Meteor.call('runshell', 'ls', ['-F'], function(err,response) {
	  		if(err) {
	  			Session.set('serverDataResponse', "Error:" + err.reason);
	  			return;
	  		}
	  		Session.set('serverDataResponse', response);
			console.log('serverDataResponse: '+response);
		});
	  	console.log('goto shell:');
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


