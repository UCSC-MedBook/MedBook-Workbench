
/*****************************************************************************/
/* Shell: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Shell.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Shell.helpers({
	response1: function() {
		console.log('lookup response in session serverDataResponse');
		file_id = Session.get('serverDataResponse');
	
		//var rstream = Blobs.findOneStream({filename:'ls_result.txt'});
		/*
		var fd = rstream.open();
		var stuff = fd.read();
*/
		return file_id;
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


