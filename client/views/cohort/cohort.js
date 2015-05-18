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
        var cookieGenes = getCookieEvents();
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

        // TODO throw away pivot settings
        delete Session.keys['pivotSettings'];
        console.log('SESSION pivotSettings', Session.get('pivotSettings'));
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

    /**
     * Uses information in Session object to get the correct page of mongo documents from the specified collection.
     * This one only works when each obs-deck feature corresponds to just one document in the collection.
     * @param {Object} collectionObj as defined in /both/collections/*.js
     * @param {Object} datatypeName as defined in obs-deck plugin
     */
    var getPagedCollectionDocList = function(collectionObj, datatypeName) {
        var pagingSessionKey = "subscriptionPaging";
        var pageSize = 5;

        var pagingConfig = Session.get(pagingSessionKey) || {};
        var configKey = datatypeName;
        var pagingObj;
        if ( configKey in pagingConfig) {
            pagingObj = pagingConfig[configKey];
        } else {
            pagingObj = {
                "head" : 0,
                "tail" : 0
            };
        }

        var totalCount = collectionObj.find({}, {
            reactive : false
        }).count();

        var totalNumPages = Math.ceil(totalCount / pageSize);
        console.log("totalNumPages", totalNumPages);

        // be careful of off-by-one bugs
        if (pagingObj["head"] > totalNumPages - 1) {
            console.log('attempting to pass last page of documents - going back to last page');
            pagingObj["head"] = totalNumPages - 1;
            Session.set(pagingSessionKey, pagingConfig);
        }

        var resp = collectionObj.find({}, {
            skip : (pageSize * pagingObj["head"]),
            limit : pageSize,
            reactive : true
        });
        var docList = resp.fetch();

        return docList;
    };

    var getExpressionDocList = function() {
        return getPagedCollectionDocList(Expression2, "expression data");
    };

    var applyPagingToGeneList = function(scoredGenes) {
        // console.log("scoredGenes", scoredGenes);
        var pagingSessionKey = "subscriptionPaging";
        var pageSize = 5;
        var pagingConfig = Session.get(pagingSessionKey) || {};
        var sortedGenes = scoredGenes.sort(u.sort_by("score"));
        var result = [];

        // setup data structures
        var pagedGenes = [];
        var pagedGenes_anti = [];

        for (var i = 0, length = scoredGenes.length; i < length; i++) {
            var geneObj = scoredGenes[i];
            var name = geneObj["name"];
            var score = geneObj["score"];

            if (score < 0) {
                pagedGenes_anti.unshift(name);
            } else {
                pagedGenes.push(name);
            }
        }

        // get page settings
        var configKey = "expression data";
        var pagingObj;
        if ( configKey in pagingConfig) {
            pagingObj = pagingConfig[configKey];
        } else {
            pagingObj = {
                "head" : 0,
                "tail" : 0
            };
        }

        // apply settings via array.slice
        // pos
        var length = pagedGenes.length;
        var totalPages = Math.ceil(length / pageSize);

        // beware of off-by-one errors
        if (pagingObj["head"] > totalPages - 1) {
            console.log('attempting to pass last page of documents - going back to last page of head', configKey);
            pagingObj["head"] = totalPages - 1;
            if (pagingObj["head"] < 0) {
                pagingObj["head"] = 0;
            }
            Session.set(pagingSessionKey, pagingConfig);
        }

        var skip = (pageSize * pagingObj["head"]);
        pagedGenes = pagedGenes.slice(skip, (skip + pageSize));

        // anti
        var length_anti = pagedGenes_anti.length;
        var totalPages_anti = Math.ceil(length_anti / pageSize);

        // beware of off-by-one errors
        if (pagingObj["tail"] > totalPages_anti - 1) {
            console.log('attempting to pass last page of documents - going back to last page of tail', configKey);
            pagingObj["tail"] = totalPages_anti - 1;
            if (pagingObj["tail"] < 0) {
                pagingObj["tail"] = 0;
            }
            Session.set(pagingSessionKey, pagingConfig);
        }

        var skip_anti = (pageSize * pagingObj["tail"]);
        pagedGenes_anti = pagedGenes_anti.slice(skip_anti, (skip_anti + pageSize));

        // cat arrays for return
        result = result.concat(pagedGenes, pagedGenes_anti);

        console.log('pages', totalPages, totalPages_anti, configKey);

        return result;
    };

    var applyPagingToSignatureNames = function(scoredSigs) {
        // console.log("scoredSigs", scoredSigs);
        var pagingSessionKey = "subscriptionPaging";
        var pageSize = 5;
        var pagingConfig = Session.get(pagingSessionKey) || {};
        var sortedSigs = scoredSigs.sort(u.sort_by("score"));
        var signatureDatatypes = ["expression signature", "kinase target activity", "tf target activity"];
        var result = [];

        // setup data structure
        var pagedSignatures = {};
        var pagedSignatures_anti = {};

        for (var i = 0, length = signatureDatatypes.length; i < length; i++) {
            var datatype = signatureDatatypes[i];
            pagedSignatures[datatype] = [];
            pagedSignatures_anti[datatype] = [];
        }

        // populate data structure by name parsing
        for (var i = 0, length = scoredSigs.length; i < length; i++) {
            var sigObj = scoredSigs[i];
            var name = sigObj["name"];
            var score = sigObj["score"];

            // remove version number from name
            fields = name.split("_v");
            fields.pop();
            var rootName = fields.join("_v");

            var datatype;
            if ((u.endsWith(rootName, "_tf_viper")) || (u.beginsWith(rootName, "tf_viper_"))) {
                datatype = "tf target activity";
            } else if (u.endsWith(rootName, "_kinase_viper")) {
                datatype = "kinase target activity";
            } else {
                datatype = "expression signature";
            }

            if (score < 0) {
                // add to front
                pagedSignatures_anti[datatype].unshift(name);
            } else {
                // add to back
                pagedSignatures[datatype].push(name);
            }

            // console.log("name", name, "score", score, "datatype", datatype);
        }

        // get page settings from session
        for (var datatype in pagedSignatures) {
            var configKey = datatype;
            var pagingObj;
            if ( configKey in pagingConfig) {
                pagingObj = pagingConfig[configKey];
            } else {
                pagingObj = {
                    "head" : 0,
                    "tail" : 0
                };
            }
            // apply settings via array.slice
            // pos
            var length = pagedSignatures[datatype].length;
            var totalPages = Math.ceil(length / pageSize);

            // beware of off-by-one errors
            if (pagingObj["head"] > totalPages - 1) {
                console.log('attempting to pass last page of documents - going back to last page of head', datatype);
                pagingObj["head"] = totalPages - 1;
                if (pagingObj["head"] < 0) {
                    pagingObj["head"] = 0;
                }
                Session.set(pagingSessionKey, pagingConfig);
            }

            var skip = (pageSize * pagingObj["head"]);
            pagedSignatures[datatype] = pagedSignatures[datatype].slice(skip, (skip + pageSize));

            // anti
            var length_anti = pagedSignatures_anti[datatype].length;
            var totalPages_anti = Math.ceil(length_anti / pageSize);

            // beware of off-by-one errors
            if (pagingObj["tail"] > totalPages_anti - 1) {
                console.log('attempting to pass last page of documents - going back to last page of tail', datatype);
                pagingObj["tail"] = totalPages_anti - 1;
                if (pagingObj["tail"] < 0) {
                    pagingObj["tail"] = 0;
                }
                Session.set(pagingSessionKey, pagingConfig);
            }

            var skip_anti = (pageSize * pagingObj["tail"]);
            pagedSignatures_anti[datatype] = pagedSignatures_anti[datatype].slice(skip_anti, (skip_anti + pageSize));

            // cat arrays for return
            result = result.concat(pagedSignatures[datatype], pagedSignatures_anti[datatype]);

            console.log('pages', totalPages, totalPages_anti, datatype);
        }

        // console.log('pagedSignatures', pagedSignatures);
        // console.log('pagedSignatures_anti', pagedSignatures_anti);

        return result;
    };

    // Deps.autorun is triggered when reactive data source has changed
    Deps.autorun(function() {
        var s = ' <-- Deps.autorun in cohort.js';
        // console.log('Deps.autorun');

        // TODO getting default signature for a contrast
        var contrastId = Session.get('selectedContrast');
        console.log('contrastId', contrastId, s);
        if (contrastId) {
            var contResp = Contrast.findOne({
                "_id" : contrastId
            });
            console.log('contResp', contResp, s);

            // TODO get the default sig.
        } else {
            console.log('NO CONTRAST ID', s);
        }

        // pivoting with correlator
        var corrResp = Correlator.find({}, {
            // sort : {
            // score : -1
            // },
            reactive : true
        });
        var corrDocList = corrResp.fetch();
        console.log('corrDocList.length:', corrDocList.length, s);

        var pivotSettings = Session.get('pivotSettings');
        if (pivotSettings) {
            console.log('pivotSettings', pivotSettings, s);
            var pName = pivotSettings['name'];
            var pDatatype = pivotSettings['datatype'];
            var pVersion = pivotSettings['version'];

            var geneList = [];
            var signatureNames = [pName + "_v" + pVersion];

            var scoredGenes = [];
            var scoredSigs = [{
                "name" : pName + "_v" + pVersion,
                "score" : 1
            }];
            for (var i = 0; i < corrDocList.length; i++) {
                var doc = corrDocList[i];
                if ((doc['name_1'] === pName) && (doc['datatype_1'] === pDatatype) && ("" + doc['version_1'] === "" + pVersion)) {
                    // matched pivot event

                    var name2 = doc["name_2"];
                    var datatype2 = doc["datatype_2"];
                    var version2 = doc["version_2"];
                    var score = doc["score"];

                    // TODO hack for mismatched version numbers between mongo collections
                    if (u.endsWith(name2, "_tf_viper")) {
                        version2 = "4";
                    }

                    if (datatype2 === 'signature') {
                        // matched event is a signature
                        var name = name2 + "_v" + version2;
                        signatureNames.push(name);

                        var eventScoreObj = {
                            "name" : name,
                            "score" : score
                        };
                        scoredSigs.push(eventScoreObj);
                        // } else if (u.endsWith(name2, "_tf_viper")) {
                        // // matched event is a signature
                        // var name = name2.replace("_tf_viper", "");
                        // name = "tf_viper_" + name;
                        // name = name + "_v" + "4";
                        // signatureNames.push(name);
                        //
                        // var eventScoreObj = {
                        // "name" : name,
                        // "score" : score
                        // };
                        // scoredSigs.push(eventScoreObj);
                    } else if (datatype2 === 'expression') {
                        // matched event is a gene
                        var name = name2;
                        geneList.push(name);

                        var eventScoreObj = {
                            "name" : name,
                            "score" : score
                        };
                        scoredGenes.push(eventScoreObj);
                    }
                }
            }

            // TODO paging of ["kinase target activity","tf target activity","expression signature"]
            signatureNames = applyPagingToSignatureNames(scoredSigs);

            geneList = applyPagingToGeneList(scoredGenes);

            console.log('geneList', geneList, s);
            console.log('signatureNames', signatureNames, s);

            Session.set('geneset', 'from pivotSettings');
            Session.set('geneList', geneList);
            Session.set('signatureNames', signatureNames);

        } else {
            console.log('NO PIVOTSETTINGS FROM SESSION', pivotSettings, s);

            // when this is empty, no pivot data is sent to obs-deck
            corrDocList = [];

            Session.set('signatureNames', ['MAP3K8_kinase_viper_v4']);
        }

        // get clinical data
        var clinResp = ClinicalEvents.find({}, {
            reactive : true
        });
        var clinDocList = clinResp.fetch();
        console.log('clinDocList.length:', clinDocList.length, s);

        // get expression data
        var expResp = Expression2.find({}, {
            reactive : true
        });
        var expDocList = expResp.fetch();
        console.log('expDocList.length:', expDocList.length, s);

        // get signature gene:weight vectors + metadata
        var signatureScoresResp = SignatureScores.find({}, {
            reactive : true
        });
        var signatureScoresDoclist = signatureScoresResp.fetch();
        console.log('signatureScoresDoclist.length:', signatureScoresDoclist.length, s);

        // signature indexes
        var sigIdxResp = Signature.find({}, {
            reactive : true
        });
        var sigIdsDocList = sigIdxResp.fetch();
        console.log('sigIdsDocList.length:', sigIdsDocList.length, s);

        // build observation deck
        if ((clinDocList.length > 0) || (expDocList.length > 0)) {
            od_config = buildObservationDeck(divElem, {
                // gene query service -> http://localhost:3000/genes?q=MAPK
                "geneQueryUrl" : "/genes?q=",
                'pivotScores' : {
                    'object' : corrDocList
                },
                'mongoData' : {
                    'clinical' : clinDocList,
                    'expression' : expDocList
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
                    if (datatype === 'expression data') {
                        // mRNA url: /wb/gene/<gene name>
                        var gene = eventId.replace('_mRNA', '');
                        var url = '/wb/gene/' + gene;
                        window.open(url, "_self");
                    } else if (datatype === 'clinical data') {
                        // clinical url: /wb/clinical/<name>
                        var feature = eventId;
                        var url = '/wb/clinical/' + feature;
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

