
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
	contrast: function(){
		var study = Session.get('studyID') ;
		console.log('find contrasts for studyID:'+study);
		var c =  Contrast.findOne({_id:this._id});
		if (!c) return;
		return c[this.list];
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


