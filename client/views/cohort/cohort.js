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
        var s = ' <-- Deps.autorun in cohort.js';
        // console.log('Deps.autorun');

        // get clinical data
        var clinResp = ClinicalEvents.find({}, {
            reactive : true
        });
        var clinDocList = clinResp.fetch();
        console.log('clinDocList.length:', clinDocList.length, s);

        // get expression data
        var geneList = ['PEG10', 'KCNJ6', 'FGF9', 'CNKSR3', 'ANK2', 'ST8SIA4', 'RUNX1T1', 'GPRIN2', 'KIT', 'GABRB3', 'IPCEF1', 'GRIN3A', 'CACHD1', 'GYG2', 'ADM', 'F2RL1', 'TMPRSS2', 'TEAD2', 'DHODH', 'FXYD3', 'SERTAD1', 'NQO1', 'DHCR24', 'BANK1', 'INO80C', 'SLC30A4', 'F5', 'HK2', 'PPARG', 'CXCL2', 'FGFRL1', 'NNMT', 'PFKFB4', 'PRR5', 'SPINK1', 'OPHN1', 'KLRB1', 'ERP27', 'SELL', 'IRAK2', 'APOH', 'HSH2D', 'REEP6', 'KLK3', 'MAFK', 'ATP2C2', 'AGR2', 'ACOT9', 'ANG', 'CEACAM1'];
        Session.set('geneList', geneList);
        var expResp = Expression.find({}, {
            reactive : true
        });
        var expDocList = expResp.fetch();
        console.log('expDocList.length:', expDocList.length, s);

        // TODO get signature gene:weight vectors + metadata
	    var smallCellSigEventDb = SignatureScores.find({});
		
		smallCellSigEventObj['data'] = SignatureScores.find({}).fetch();
		/*[{
	               'id' : 'sample1',
	               'val' : 0.123
	           }, {
	               'id' : 'sample2',
	               'val' : 0.234
	           }];

	           arSigEventObj['data'] = [];*/
        // build observation deck
        if ((clinDocList.length > 0) || (expDocList.length > 0)) {
            buildObservationDeck(divElem, {
                'mongoData' : {
                    // 'clinical' : 'aaa',
                    'clinical' : clinDocList,
                    // 'expression' : 'bbb'
                    'expression' : expDocList
                },
                'signature' : {
                    'expression' : {
                        'object' : [smallCellSigEventObj, arSigEventObj]
                    }
                }
            });
        } else {
            // remove child elements of divElem
            while (divElem.firstChild) {
                divElem.removeChild(divElem.firstChild);
            }
            divElem.innerHTML('no clinical data', s);
        }

    });
};

Template.Cohort.destroyed = function() {
};

