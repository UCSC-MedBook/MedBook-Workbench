// example: https://meteor.hackpad.com/Meteor-Cookbook-Reactive-D3-Visualizations-YUR9JT4mrm9
// example: http://blog.benmcmahen.com/post/41124327100/using-d3-and-meteor-to-generate-scalable-vector

// https://www.eventedmind.com/feed/meteor-introducing-the-package-system
// packaging existing libraries http://www.meteorpedia.com/read/Packaging_existing_Libraries#!

// rendered vs Deps.autorun: https://stackoverflow.com/questions/16314505/meteor-template-rendered-why-collection-is-empty

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
    clinical_events : function() {
        console.log('Template.ClinicalEventsIndex.helper.clinical_events');
		var study = Session.get('studyID')
        var response = ClinicalEvents.find({'study':study});

        var docList = response.fetch();
        console.log('docList:', docList.length, '<-- from Template.ClinicalEventsIndex.helper.clinical_events');

        return response;
    }
});

/*****************************************************************************/
/* ClinicalEventsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.ClinicalEventsIndex.created = function() {
};

Template.ClinicalEventsIndex.rendered = function() {
    // TODO DOM rendered or changed
    // console.log('Template.ClinicalEventsIndex.rendered');

    var divElem = document.getElementById("ClinicalEventsIndex_OD_Div");

    // TODO Deps.autorun is triggered when reactive data source has changed
    this.autorun(function() {
        // console.log('Deps.autorun');
        var s = ' <-- Deps.autorun in clinical_events_index.js';
		var study = Session.get('studyID')
        var response = ClinicalEvents.find({'study':study});

        //var response = ClinicalEvents.find({});
        var docList = response.fetch();
        console.log('for study', study,'clinical events length:', docList.length, s);
        //console.log('docList:', JSON.stringify(docList), ' <-- Deps.autorun');

        if (docList.length > 0) {
            pie_charts(divElem, {
                'mongoData' : {
                    'clinical' : docList
                }
            });
        } else {
            // remove child elements of divElem
            while (divElem.firstChild) {
                divElem.removeChild(divElem.firstChild);
            }
            divElem.innerHTML = 'no clinical data - select a different study';
        }

    });

};

Template.ClinicalEventsIndex.destroyed = function() {
};
