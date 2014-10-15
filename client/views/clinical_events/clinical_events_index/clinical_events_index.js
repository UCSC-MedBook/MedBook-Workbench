
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
		var study = Session.get('studyID');
		console.log('get clinical events for '+study);
		return ClinicalEvents.find({'study_id':study});
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


