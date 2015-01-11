	
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
	},
	'click #pa': function(event,template){
		//var sampleList = {'DTB-001':1,'DTB-003':1,'DTB-004':1,
		//	'DTB-005':1,'DTB-009':1,'DTB-011':1,'DTB-018':1,'DTB-020':1,'DTB-022':1,'DTB-023':1,
		//	'DTB-032':1,'DTB-034':1,'DTB-036':1,'DTB-038':1,'DTB-040':1,'DTB-046':1,'DTB-071':1,'DTB-073':1,
		//	'DTB-024Pro2':1,'DTB-030':1,'DTB-053':1,'DTB-063':1,'DTB-064':1,'DTB-069:':1,'DTB-073Pro':1, '_id':0
		//}
		var contrastID = 'kgyBukTon7evkzz3P'
		
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


