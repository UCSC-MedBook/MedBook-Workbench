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
        var cookieGenes = getCookieEvents();
        console.log('cookieGenes', cookieGenes);

        var sourceElem = event.target || event.srcElement;
        var elemValue = sourceElem.value;

        var genesetName = '';
        for (var i = 0; i < sourceElem.length; i++) {
            var option = sourceElem[i];
            if (option.selected) {
                genesetName = (option.text);
                break;
            }
        }

        Session.set('geneset', genesetName);
        console.log('SESSION genesetName:', Session.get('geneset'));

        Session.set('geneList', cookieGenes.concat(elemValue.split(',')));
        console.log('SESSION geneset members', Session.get('geneList').length, 'genes', Session.get('geneList'));
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
    // genesets : function() {
    // return u.getKeys(gene_lists);
    // },
    genesets : function() {
        var genesetsResp = GeneSets.find({}, {
            reactive : true
        });
        var genesetsDocList = genesetsResp.fetch();
        console.log('genesetsDocList', genesetsDocList);

        var result = [];
        for (var i = 0; i < genesetsDocList.length; i++) {
            var doc = genesetsDocList[i];
            var name = doc['name'];
            var members = doc['members'];
            result.push({
                'name' : name,
                'members' : members
            });
        }
        return result;
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
                },
                'deleteEvents' : ['Docetaxel']
            });
        } else {
            // remove child elements of divElem
            while (divElem.firstChild) {
                divElem.removeChild(divElem.firstChild);
            }
            divElem.innerHTML = 'no data';
        }

    });
};

Template.Cohort.destroyed = function() {
};

