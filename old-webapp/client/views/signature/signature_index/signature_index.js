
/*****************************************************************************/
/* SignatureIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.SignatureIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.SignatureIndex.helpers({
  signature: function() {
	  //var s= Signature.find();
	  return this
  },
  version: function () { return this.version.toFixed(1); }
});

/*****************************************************************************/
/* SignatureIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.SignatureIndex.created = function () {
};

Template.SignatureIndex.rendered = function () {
};

Template.SignatureIndex.destroyed = function () {
};


