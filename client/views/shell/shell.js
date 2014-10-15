
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
		return Session.get('serverDataResponse');
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


