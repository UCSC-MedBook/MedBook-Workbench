
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
		Router.go('/wb/');
    },
    'click #cohort_tab': function(event,template){
 	  	Router.go('/wb/cohort/');
    },
 	'click #contrast_tab': function(event,template){
  		Router.go('/wb/scv/');
	},
  	'click #gene_tab': function(event,template){
   		Router.go('/wb/gene/');
    },
   	'click #pathway_tab': function(event,template){
    	Router.go('/wb/pathway/');
    },
	'click #clinical_tab': function(event,template){
	   	Router.go('/wb/clinical/');
	},
    'click #job_tab': function(event,template){
	  	Router.go('/wb/shell/'+'dipsc');
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
  	},
	'click #drug_tab': function(event,template){
	   	Router.go('/wb/drug/');
	},
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


