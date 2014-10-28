
/*****************************************************************************/
/* Cohort: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Cohort.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Cohort.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Cohort: Lifecycle Hooks */
/*****************************************************************************/
Template.Cohort.created = function () {
};

Template.Cohort.rendered = function () {
    var divElem = document.getElementById("Cohort_OD_Div");

    // TODO Deps.autorun is triggered when reactive data source has changed
    Deps.autorun(function() {
        // console.log('Deps.autorun');

        //var response = ClinicalEvents.find({});
        //
        //var docList = response.fetch();
        //
        //console.log('docList.length:', docList.length, ' <-- Deps.autorun');
        //console.log('docList:', JSON.stringify(docList), ' <-- Deps.autorun');
        //
        buildObservationDeck(divElem, null);
		
	});
};

Template.Cohort.destroyed = function () {
};


