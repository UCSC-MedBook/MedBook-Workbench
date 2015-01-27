getCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
        c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
};

// cookie {"pivot_sort":{"pivot_event":"CACHD1_mRNA"},"colSort":{"steps":[{
// "name" : "FGF9_mRNA",
// "reverse" : false
// }]
// },"required events":["BANK1_mRNA"]}

getCookieGenes = function(name) {
    var eventList = [];
    var cookieObj = u.parseJson(getCookie(name));
    if ((cookieObj == null) || ((u.getKeys(cookieObj)).length == 0)) {
        return [];
    }
    if (u.hasOwnProperty(cookieObj, 'pivot_sort')) {
        eventList.push(cookieObj['pivot_sort']['pivot_event']);
    }
    if (u.hasOwnProperty(cookieObj, 'colSort')) {
        var steps = cookieObj['colSort']['steps'];
        for (var i = 0; i < steps.length; i++) {
            var step = steps[i];
            eventList.push(step['name']);
        }
    }
    if (u.hasOwnProperty(cookieObj, 'required events')) {
        eventList.concat(cookieObj['required events']);
    }

    var geneList = [];
    for (var i = 0; i < eventList.length; i++) {
        var eventId = eventList[i];
        if (u.endsWith(eventId, '_mRNA')) {
            geneList.push(eventId.replace('_mRNA', ''));
        }
    }

    return u.eliminateDuplicates(geneList);
};

/*****************************************************************************/
/* Cohort: Event Handlers and Helpers .js*/
/*****************************************************************************/
Template.Cohort.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
    'change #geneset' : function(event, template) {
        // TODO genesets currently hardcoded into observation-deck plugin
        // TODO genesets should be made into a subscription to mongodb
        var cookieGenes = getCookieGenes('od_config');
        console.log('cookieGenes', cookieGenes);

        // document.cookie = 'od_config={};path=/';

        var genesetName = event.currentTarget.value;
        Session.set('geneset', genesetName);
        document.cookie = 'od_config={};path=/';
        console.log('SESSION geneset:', Session.get('geneset'));

        Session.set('geneList', cookieGenes.concat(gene_lists[genesetName]));
        console.log('SESSION geneList', Session.get('geneList').length, 'genes');
    },
    'click .select_geneset' : function() {
        console.log('event: click .select_geneset');
    }
});

Template.Cohort.helpers({
    /*
     * Example:
     *  items: function () {
     *    return Items.find();
     *  }
     */
    genesets : function() {
        return u.getKeys(gene_lists);
    },
    selected : function() {
        if (Session.get('geneset') == this._id)
            return true;
        else
            return false;
    }
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
        if ( typeof Session.get('geneset') === 'undefined') {
            // default to artemSmallCellSig50
            Session.set('geneset', 'artemSmallCellSig50');
            Session.set('geneList', ['PEG10', 'KCNJ6', 'FGF9', 'CNKSR3', 'ANK2', 'ST8SIA4', 'RUNX1T1', 'GPRIN2', 'KIT', 'GABRB3', 'IPCEF1', 'GRIN3A', 'CACHD1', 'GYG2', 'ADM', 'F2RL1', 'TMPRSS2', 'TEAD2', 'DHODH', 'FXYD3', 'SERTAD1', 'NQO1', 'DHCR24', 'BANK1', 'INO80C', 'SLC30A4', 'F5', 'HK2', 'PPARG', 'CXCL2', 'FGFRL1', 'NNMT', 'PFKFB4', 'PRR5', 'SPINK1', 'OPHN1', 'KLRB1', 'ERP27', 'SELL', 'IRAK2', 'APOH', 'HSH2D', 'REEP6', 'KLK3', 'MAFK', 'ATP2C2', 'AGR2', 'ANG', 'CEACAM1']);
        }
        var geneList = Session.get('geneList');

        var expResp = Expression.find({}, {
            reactive : true
        });
        var expDocList = expResp.fetch();
        console.log('expDocList.length:', expDocList.length, s);

        // TODO get signature gene:weight vectors + metadata
        var signatureScoresResp = SignatureScores.find({});
        var signatureScoresDoclist = signatureScoresResp.fetch();

        smallCellSigEventObj['data'] = signatureScoresDoclist;

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
            divElem.innerHTML('no data');
        }

    });
};

Template.Cohort.destroyed = function() {
};

