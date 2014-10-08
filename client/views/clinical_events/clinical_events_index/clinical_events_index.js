
/*****************************************************************************/
/* ClinicalEventsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ClinicalEventsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ClinicalEventsIndex.helpers({
	clinical_events: function(){
		return ClinicalEvents.find({});
	}
});

/*****************************************************************************/
/* ClinicalEventsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.ClinicalEventsIndex.created = function () {
};

Template.ClinicalEventsIndex.rendered = function () {
};

Template.ClinicalEventsIndex.destroyed = function () {
};


