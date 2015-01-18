	
/*****************************************************************************/
/* Shell: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ShellLimma.events({
	'click #shell': function(event,template){
		Meteor.call('runshell', 'ls', ['-F'], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "ls Error:" + err.reason);
				return;
			}
			Session.set('serverDataResponse', response);
			console.log('ls OK: '+response);
		});
	},
	'click #limma': function(event,template){
		var contrastID = Session.get('selectedContrast')
		console.log('run limma with contrast', contrastID)
		Meteor.call('limma_adapter', [contrastID], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "pathmark Error:" + err.reason);
				return;
			}
			Session.set('limma serverDataResponse', response);
			console.log('limma response: '+response);
		});
	},	
	'click #pa': function(event,template){
		var contrastID = '3NdogPaMZWk42qTq2'
		
		Meteor.call('pathmark_adapter', [contrastID], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "pathmark Error:" + err.reason);
				return;
			}
			Session.set('PA serverDataResponse', response);
			console.log('path OK: '+response);
		});
	}	
});

Template.ShellLimma.helpers({
	response1: function() {
		console.log('lookup response in session serverDataResponse');
		file_id = Session.get('serverDataResponse');
		return file_id;
	},
	blobs: function() {
		return Blobs.find();
	},
	selectedContrast: function(){
			var contrastID = Session.get('selectedContrast');
			return Contrast.find({_id:contrastID})
	}
});

/*****************************************************************************/
/* Shell: Lifecycle Hooks */
/*****************************************************************************/
Template.ShellLimma.created = function () {
};

Template.ShellLimma.rendered = function () {
};

Template.ShellLimma.destroyed = function () {
};


