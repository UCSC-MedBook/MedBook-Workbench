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
Template.Cohort.created = function() {
};

Template.Cohort.rendered = function() {
    var divElem = document.getElementById("Cohort_OD_Div");

    // TODO Deps.autorun is triggered when reactive data source has changed
    Deps.autorun(function() {
        // console.log('Deps.autorun');

        var clinResp = ClinicalEvents.find({});
        var clinDocList = clinResp.fetch();
        console.log('clinDocList.length:', clinDocList.length, ' <-- Deps.autorun');
        // console.log('clinDocList:', JSON.stringify(clinDocList), ' <-- Deps.autorun');

        if ((clinDocList.length > 0)) {
            buildObservationDeck(divElem, {
                'mongoData' : {
                    'clinical' : clinDocList,
                    'expression' : 'bbb'
                }
            });
        } else {
            // remove child elements of divElem
            while (divElem.firstChild) {
                divElem.removeChild(divElem.firstChild);
                divElem.innerHTML('no clinical data');
            }
        }

    });
};

Template.Cohort.destroyed = function() {
};

