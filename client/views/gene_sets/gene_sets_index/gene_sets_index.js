/*****************************************************************************/
/* GeneSetsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.GeneSetsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.GeneSetsIndex.helpers({
  geneSetsIndex: function() {
		var g = GeneSets.find({});
  		return g;
	}
});

/*****************************************************************************/
/* GeneSetsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.GeneSetsIndex.created = function () {
};

Template.GeneSetsIndex.rendered = function () {
};

Template.GeneSetsIndex.destroyed = function () {
};