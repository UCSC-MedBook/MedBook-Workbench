/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
    'change #study' : function(event, template) {
        this.currStudy = event.currentTarget.value;
		var currentRoute = Router.current().route.getName()
		console.log('#change study and set session studyID ', currentRoute, this.currStudy)
		Session.set('studyID', this.currStudy)
		Router.go(currentRoute,{}, {query: {'study':this.currStudy}})
		//{'study':event.currentTarget.value}})
	
        //console.log('Session studyID:', Session.get('studyID'));
    },
    'change #contrast1' : function(event, template) {
	 	this.currContrast = event.target.value;
		var studyId = Session.get('studyID')
		console.log('get session studyID', studyId)
		console.log('#change contrast', event)
		var currentRoute = Router.current().route.getName()
		console.log('->contrast route', currentRoute, 'cont', this.currContrast, 'this', this)
		if (currentRoute == 'Scv') {
			Router.go('Scv',{_id:this.currContrast}, {query: {study:studyId, contrast:this.currContrast}})
		}
		else {
			Router.go(currentRoute,{_id:this.currContrast}, {query: {study:studyId, contrast:this.currContrast}})
		}
	},
    'click .nuc' : function() {
        document.cookie = 'od_config={};path=/';
        location.reload(true);
    },
	'click .logout' : function() {
		console.log('logout')
		Meteor.logout();
		Meteor.logoutOtherClients;
	}
});

Template.MasterLayout.helpers({
	member: function() {
		if (Meteor.user()) {
			var collaborations = Meteor.user().profile.collaborations;
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
		var contrast = Session.get('selectedContrast')
		if (study) {
			if (contrast) {
				return { study: study, contrast: contrast}
			}
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

