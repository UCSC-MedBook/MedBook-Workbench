	
/*****************************************************************************/
/* Shell: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ShellGsea.events({
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
	'click #gsea': function(event,template){
		var signatureID = Session.get('selectedSignature')
		console.log('run gsea with signature', signatureID)
		Meteor.call('gsea_adapter', [signatureID], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "gsea Error:" + err.reason);
				return;
			}
			Session.set('gsea serverDataResponse', response);
			console.log('sgesa response: '+response);
		});
	}
	
});

Template.ShellGsea.helpers({
	response1: function() {
		console.log('lookup response in session serverDataResponse');
		file_id = Session.get('serverDataResponse');
		return file_id;
	},
	blobs: function() {
		return Blobs.find();
	},
	selectedSignature: function(){
			var signatureID = Session.get('selectedSignature');
			return Signature.find({_id:signatureID})
	}
});

/*****************************************************************************/
/* Shell: Lifecycle Hooks */
/*****************************************************************************/
Template.ShellGsea.created = function () {
};

Template.ShellGsea.rendered = function () {
};

Template.ShellGsea.destroyed = function () {
};


