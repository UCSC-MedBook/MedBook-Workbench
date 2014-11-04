/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/

_.extend(App, {
});

App.helpers = {
	selectedStudy: function () {
		return Session.get('studyID');
	}
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});
