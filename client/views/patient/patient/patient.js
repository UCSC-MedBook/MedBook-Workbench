
/*****************************************************************************/
/* Patient: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Patient.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Patient.helpers({
	  marker: function () { 
		  return this.marker.toFixed(2); 
	  }
});
	

/*****************************************************************************/
/* Patient: Lifecycle Hooks */
/*****************************************************************************/
Template.Patient.created = function () {
};

Template.Patient.rendered = function () {
};

Template.Patient.destroyed = function () {
};


