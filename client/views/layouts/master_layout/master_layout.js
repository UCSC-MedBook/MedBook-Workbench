/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
    'click .nuc' : function() {
        document.cookie = 'od_config={};path=/';
        location.reload(true);
    },
	'click .logout' : function() {
		console.log('logout');
		Meteor.logout();
		Meteor.logoutOtherClients();
	}
});

Template.MasterLayout.helpers({
	member: function() {
		if (Meteor.user()) {
			var collaborations = Meteor.user().profile.collaborations;
			return collaborations;
		}
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
