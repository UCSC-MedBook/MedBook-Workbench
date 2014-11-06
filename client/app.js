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


var blobStore = new FS.Store.GridFS("blobs", {
  mongoUrl: 'mongodb://127.0.0.1:27017/MedBook/', // optional, defaults to Meteor's local MongoDB
  mongoOptions: {...},  // optional, see note below
  maxTries: 1, // optional, default 5
  chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});
