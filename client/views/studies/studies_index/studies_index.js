if (Meteor.isClient) {
/*****************************************************************************/
/* StudiesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.StudiesIndex.events({
	  	'change #study': function(event,template){
		  Session.set('studyID', event.currentTarget.value);
		  this.currStudy = event.currentTarget.value;
		  console.log('Session studyID:', Session.get('studyID'));
		}, 
		'click #cohort': function(e,t) {
			console.log('click cohort');
		},
		'change #group1': function(event,template){
			var x = $(event.target).find('[name=group1]').context.selectedOptions;
		 	var group_name = x[0].text;
  		 	Session.set('group1', group_name);
		 	console.log('Session group1:', Session.get('group1'));
  		}, 
    	'change #group2': function(event,template){
  		  	var x = $(event.target).find('[name=group2]').context.selectedOptions;
  		  	var group_name = x[0].text;
    	  	Session.set('group2', group_name);
  		  	console.log('Session group2:', Session.get('group2'));
    	}, 
		'click #scv': function (e,t) {
			var g1=Session.get('group1')
			var g2=Session.get('group2')
			console.log('scv',g1,g2);
			Router.go('/scv/'+g1+'/'+g2);
		}
});
	
}

Template.StudiesIndex.helpers({
	//studies: function(){
	//	return Studies.find({},{sort: {short_name:1}});
	//}
});

/*****************************************************************************/
/* StudiesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.StudiesIndex.created = function () {
   
};

Template.StudiesIndex.rendered = function () {
	$(function() {
	 $( "#tabs" ).tabs();
	});
   
};

Template.StudiesIndex.destroyed = function () {
};


