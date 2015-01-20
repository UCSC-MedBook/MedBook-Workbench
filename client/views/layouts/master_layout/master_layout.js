/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
    'change #study' : function(event, template) {
        Session.set('studyID', event.currentTarget.value);
        this.currStudy = event.currentTarget.value;
        console.log('Session studyID:', Session.get('studyID'));
    },
    'click .nuc' : function() {
        document.cookie = 'od_config={};path=/';
        location.reload(true);
    }
});

Template.MasterLayout.helpers({
	studies: function() {
		return Studies.find({},{sort: {short_name:1}});		
	},
	selected: function(){
		if (Session.get('studyID') == this._id) 
			return true;
		else 
			return false;
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

