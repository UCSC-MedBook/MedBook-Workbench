	
/*****************************************************************************/
/* Shell: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ShellBoxplot.events({
	'click #boxplot': function(event,template){
		var contrastID = Session.get('selectedContrast')
		console.log('run boxplot with contrast', contrastID)
		Meteor.call('boxplot_adapter', [contrastID], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "pathmark Error:" + err.reason);
				return;
			}
			Session.set('boxplot serverDataResponse', response);
			console.log('boxplot response: '+response);
		});
	}	
});

Template.ShellBoxplot.helpers({
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
Template.ShellBoxplot.created = function () {
};

Template.ShellBoxplot.rendered = function () {
};

Template.ShellBoxplot.destroyed = function () {
};


