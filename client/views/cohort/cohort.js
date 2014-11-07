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

        // signature
        var artemSmallCellSignature = [{
            "gene" : "ACOT9",
            "weight" : "-0.0585459258348889"
        }, {
            "gene" : "ADM",
            "weight" : "-0.00252478715079689"
        }, {
            "gene" : "AGR2",
            "weight" : "-0.0583463380184209"
        }, {
            "gene" : "ANG",
            "weight" : "-0.0687482198454558"
        }, {
            "gene" : "ANK2",
            "weight" : "0.0231348089344626"
        }, {
            "gene" : "APOH",
            "weight" : "-0.0388547226743334"
        }, {
            "gene" : "ATP2C2",
            "weight" : "-0.058024614008483"
        }, {
            "gene" : "BANK1",
            "weight" : "-0.016186853840287"
        }, {
            "gene" : "CACHD1",
            "weight" : "0.00230474571177687"
        }, {
            "gene" : "CEACAM1",
            "weight" : "-0.128738897402749"
        }, {
            "gene" : "CNKSR3",
            "weight" : "0.029246202139129"
        }, {
            "gene" : "CXCL2",
            "weight" : "-0.0240996919338019"
        }, {
            "gene" : "DHCR24",
            "weight" : "-0.0102926681550793"
        }, {
            "gene" : "DHODH",
            "weight" : "-0.00598059685253882"
        }, {
            "gene" : "ERP27",
            "weight" : "-0.0327718336629654"
        }, {
            "gene" : "F2RL1",
            "weight" : "-0.00336037562926958"
        }, {
            "gene" : "F5",
            "weight" : "-0.0214381411244307"
        }, {
            "gene" : "FGF9",
            "weight" : "0.0300080974049945"
        }, {
            "gene" : "FGFRL1",
            "weight" : "-0.0246271790714406"
        }, {
            "gene" : "FXYD3",
            "weight" : "-0.00607608059458208"
        }, {
            "gene" : "GABRB3",
            "weight" : "0.00525845124671822"
        }, {
            "gene" : "GPRIN2",
            "weight" : "0.00846836790436274"
        }, {
            "gene" : "GRIN3A",
            "weight" : "0.00275757785179998"
        }, {
            "gene" : "GYG2",
            "weight" : "-2.70129971215305e-05"
        }, {
            "gene" : "HK2",
            "weight" : "-0.022839571336013"
        }, {
            "gene" : "HSH2D",
            "weight" : "-0.0393291270624271"
        }, {
            "gene" : "INO80C",
            "weight" : "-0.0167622030285804"
        }, {
            "gene" : "IPCEF1",
            "weight" : "0.00434424563716735"
        }, {
            "gene" : "IRAK2",
            "weight" : "-0.0347249492137435"
        }, {
            "gene" : "KCNJ6",
            "weight" : "0.0457298889085814"
        }, {
            "gene" : "KIT",
            "weight" : "0.00807308160066359"
        }, {
            "gene" : "KLK3",
            "weight" : "-0.04169267189297"
        }, {
            "gene" : "KLRB1",
            "weight" : "-0.0299584099158995"
        }, {
            "gene" : "MAFK",
            "weight" : "-0.0424755185745052"
        }, {
            "gene" : "NNMT",
            "weight" : "-0.0261003274219432"
        }, {
            "gene" : "NQO1",
            "weight" : "-0.00897838824491754"
        }, {
            "gene" : "OPHN1",
            "weight" : "-0.0277187166445351"
        }, {
            "gene" : "PEG10",
            "weight" : "0.0490206659219317"
        }, {
            "gene" : "PFKFB4",
            "weight" : "-0.0264580840691737"
        }, {
            "gene" : "PPARG",
            "weight" : "-0.0236663279501493"
        }, {
            "gene" : "PRR5",
            "weight" : "-0.0274361078810637"
        }, {
            "gene" : "REEP6",
            "weight" : "-0.039351866910764"
        }, {
            "gene" : "RUNX1T1",
            "weight" : "0.014462362227527"
        }, {
            "gene" : "SELL",
            "weight" : "-0.0342229449767491"
        }, {
            "gene" : "SERTAD1",
            "weight" : "-0.00726662027127917"
        }, {
            "gene" : "SLC30A4",
            "weight" : "-0.0200653445254471"
        }, {
            "gene" : "SPINK1",
            "weight" : "-0.0276827932764767"
        }, {
            "gene" : "ST8SIA4",
            "weight" : "0.0215112810540399"
        }, {
            "gene" : "TEAD2",
            "weight" : "-0.00369333748591105"
        }, {
            "gene" : "TMPRSS2",
            "weight" : "-0.00342793770108972"
        }];

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
                        'object' : [{
                            'metadata' : {
                                'id' : 'wcdt_ss_artem_v3.1',
                                'name' : null,
                                'displayName' : null,
                                'description' : null,
                                'datatype' : 'expression signature',
                                'allowedValues' : 'numeric',
                                'weightedGeneVector' : artemSmallCellSignature
                            },
                            'data' : []
                        }]
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

