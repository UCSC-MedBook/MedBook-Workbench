
/*****************************************************************************/
/* Contrast: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Contrast.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Contrast.helpers({
	contrast: function(){
		var study = Session.get('studyID') ;
		console.log('find contrasts for studyID:'+study);
		return Contrast.find({},{sort: {name:1}});
	},
});

/*****************************************************************************/
/* Contrast: Lifecycle Hooks */
/*****************************************************************************/
Template.Contrast.created = function () {
};

Template.Contrast.rendered = function () {
};

Template.Contrast.destroyed = function () {
};


