
/*****************************************************************************/
/* ContrastDetail: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ContrastDetail.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ContrastDetail.helpers({
	contrast: function(name){
		var study = Session.get('studyID') ;
		console.log('find contrasts for studyID:'+study);
		return Contrast.find({name:name},{sort: {name:1}});
	},
	sample: function(){
		var contrast = Session.get('selectedContrast')
		console.log('contrast detail sample helper for '+contrast);
	    return Contrast.find({'name':contrast}).fetch();
	}
});

/*****************************************************************************/
/* ContrastDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.ContrastDetail.created = function () {
};

Template.ContrastDetail.rendered = function () {
};

Template.ContrastDetail.destroyed = function () {
};


