SignatureIndexController = RouteController.extend({
  waitOn: function () {
	  var study = Session.get('studyID')
	   Meteor.subscribe('signature_index', study);
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
