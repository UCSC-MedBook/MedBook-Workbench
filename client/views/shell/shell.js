	
/*****************************************************************************/
/* Shell: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Shell.events({
	'click #limma': function(event,template){
		var contrastID = '3NdogPaMZWk42qTq2'
		Meteor.call('limma_adapter', [contrastID], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "pathmark Error:" + err.reason);
				return;
			}
			Session.set('limma serverDataResponse', response);
			console.log('path OK: '+response);
		});
	},
	'click #upload_exp': function(event,template){
		var studyID = Session.get('currentStudy')
		var input_file = '/data/MedBook/scripts/data_expression.tab'
		Meteor.call('upload_expression', studyID, input_file , function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "upload Error:" + err.reason);
				return;
			}
			Session.set('upload expression serverDataResponse', response);
			console.log('upload exp response: '+response);
		});
	},
	'click #upload_sig': function(event,template){
		var contrastID = Session.get('selectedContrast')
		Meteor.call('upload_signature', [contrastID], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "upload Error:" + err.reason);
				return;
			}
			Session.set('upload sig serverDataResponse', response);
			console.log('path OK: '+response);
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


