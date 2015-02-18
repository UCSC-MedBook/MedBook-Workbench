/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
    'change #study' : function(event, template) {
        this.currStudy = event.currentTarget.value;
		var currentRoute = Router.current().route.getName()
		console.log('router', currentRoute, this.currStudy)
		Router.go(currentRoute,{}, {query: {'study':this.currStudy}})
		//{'study':event.currentTarget.value}})
	
        //console.log('Session studyID:', Session.get('studyID'));
    },
    'click .nuc' : function() {
        document.cookie = 'od_config={};path=/';
        location.reload(true);
    }
});

Template.MasterLayout.helpers({
	member: function() {
		if (Meteor.user()) {
			var collaborations = Meteor.user().profile.collaborations;
			console.log("collaborations", collaborations)
			return collaborations
		}	
	},
	studies: function() {
		return Studies.find({},{sort: {short_name:1}});		
	},
	selected: function(){
		if (Session.get('studyID') == this.id) 
			return true;
		else 
			return false;
	},
	currentQueryString: function() {
		var study = Session.get('studyID')
		if (study) {
			return { study: study }
		}
		return 
	}
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function() {
};

Template.MasterLayout.rendered = function() {
};

Template.MasterLayout.destroyed = function() {
};

