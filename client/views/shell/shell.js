
/*****************************************************************************/
/* Shell: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Shell.events({
	'click #shell': function(event,template){
		Meteor.call('runshell', 'ls', ['-F'], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "ls Error:" + err.reason);
				return;
			}
			Session.set('serverDataResponse', response);
			console.log('ls OK: '+response);
		});
	}
});

Template.Shell.helpers({
	response1: function() {
		console.log('lookup response in session serverDataResponse');
		file_id = Session.get('serverDataResponse');
		return file_id;
	},
	blobs: function() {
		return Blobs.find();
	}
});

/*****************************************************************************/
/* Shell: Lifecycle Hooks */
/*****************************************************************************/
Template.Shell.created = function () {
};

Template.Shell.rendered = function () {
};

Template.Shell.destroyed = function () {
};


