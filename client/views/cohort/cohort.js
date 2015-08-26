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
        // The cookie stores genes required by obs-deck in case they might be missing from the geneset.
        // For example, if user has done sample sorting based on a gene expression, that gene expression data must be present.

        // TODO first, throw away pivot settings
        // delete Session.keys['pivotSettings'];

        var cookieGenes = observation_deck.getCookieEvents();
        console.log('cookieGenes', cookieGenes);

        var sourceElem = event.target || event.srcElement;
        var elemValue = sourceElem.value;

        var genesetName = '';
        for (var i = 0; i < sourceElem.length; i++) {
            var option = sourceElem[i];
            if (option.selected) {
                // option element text also contains set size
                genesetName = (option.text);
                var fields = genesetName.split(" (");
                fields.pop();
                genesetName = fields.join();
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
    genesets : function() {
        var genesetsResp = GeneSets.find({}, {
            reactive : true
        });
        var genesetsDocList = genesetsResp.fetch();

        var result = [];
        for (var i = 0; i < genesetsDocList.length; i++) {
            var doc = genesetsDocList[i];
            var name = doc['name'];
            var members = doc['members'];
            result.push({
                'name' : name,
                'members' : members,
                'size' : members.length
            });
        }
        return result;
    },
    selected : function() {
        var geneSetObj = this;
        var sessionGeneSet = Session.get('geneset');
        if (sessionGeneSet === geneSetObj.name) {
            return true;
        } else {
            return false;
        }
    },
});

/*****************************************************************************/
/* Cohort: Lifecycle Hooks */
/*****************************************************************************/
Template.Cohort.created = function() {
};

Template.Cohort.rendered = function() {
    var divElem = document.getElementById("Cohort_OD_Div");

    // Deps.autorun is triggered when reactive data source has changed
    Deps.autorun(function() {
        var s = ' <-- Deps.autorun in cohort.js';

        var corrDocList = Correlator.find().fetch();
        var clinDocList = ClinicalEvents.find().fetch();
        var expDocList = Expression2.find().fetch();
        var mutDocList = Mutations.find().fetch();
        var signatureScoresDoclist = SignatureScores.find().fetch();
        var sigIdsDocList = Signature.find().fetch();

        // okay to access Session variable here w.r.t churning?
        var sessionGeneList = Session.get("geneList");

        // build observation deck
        if ((clinDocList.length > 0) || (expDocList.length > 0)) {
            od_config = observation_deck.buildObservationDeck(divElem, {
                // gene query service -> http://localhost:3000/genes?q=MAPK
                "geneQueryUrl" : "/genes?q=",
                "sigQueryUrl" : "/signatures?q=",
                // geneList selected from geneSet UI control
                "geneSetControl" : sessionGeneList,
                'pivotScores' : {
                    'object' : corrDocList
                },
                'mongoData' : {
                    'clinical' : clinDocList,
                    'expression' : expDocList,
                    'mutation' : mutDocList
                },
                'signature' : {
                    'expression' : {
                        'object' : [signatureScoresDoclist]
                    }
                },
                'signature_index' : {
                    'expression' : {
                        'object' : sigIdsDocList
                    }
                },
                "rowTitleCallback" : function(eventId, config) {
                    var eventObj = config['eventAlbum'].getEvent(eventId);
                    var datatype = eventObj.metadata['datatype'];
                    console.log(eventId, datatype);
                    if (datatype === 'expression data') {
                        // mRNA url: /wb/gene/<gene name>
                        var gene = eventId.replace('_mRNA', '');
                        var url = '/wb/gene/' + gene;
                        window.open(url, "_self");
                    } else if (datatype === 'mutation call') {
                        // mRNA url: /wb/gene/<gene name>
                        var gene = eventId.replace('_mutation', '');
                        var url = '/wb/gene/' + gene;
                        window.open(url, "_self");
                    } else if (datatype === 'clinical data') {
                        // clinical url: /wb/clinical/<name>
                        var feature = eventId;
                        var url = '/wb/clinical/' + feature;
                        window.open(url, "_self");
                    } else if (datatype === "kinase target activity" || datatype === "tf target activity" || datatype === "expression signature") {
                        // signature url: /wb/signature/<sigName>
                        var sigName = eventId;
                        var url = "/wb/signature/" + sigName;
                        window.open(url, "_self");
                    }
                },
                "columnTitleCallback" : function(sampleId, config) {
                    var url = '/wb/patient/' + sampleId;
                    window.open(url, "_self");
                }
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

