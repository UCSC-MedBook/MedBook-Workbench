CohortController = RouteController.extend({

    // waitOn : function() {
    // var s = '<--- CohortController.waitOn in client/controllers/cohort.js';
    // var correlatorLimit = 5;
    // var geneList = Session.get('geneList');
    // var studyID = Session.get('studyID');
    // var contrastID = Session.get('selectedContrast');
    // var sigNames = Session.get('signatureNames');
    // var pagingConfig = Session.get("subscriptionPaging") || {};
    //
    // //var geneList = ['PEG10', 'KCNJ6', 'FGF9', 'CNKSR3', 'ANK2', 'ST8SIA4', 'RUNX1T1', 'GPRIN2', 'KIT', 'GABRB3', 'IPCEF1', 'GRIN3A', 'CACHD1', 'GYG2', 'ADM', 'F2RL1', 'TMPRSS2', 'TEAD2', 'DHODH', 'FXYD3', 'SERTAD1', 'NQO1', 'DHCR24', 'BANK1', 'INO80C', 'SLC30A4', 'F5', 'HK2', 'PPARG', 'CXCL2', 'FGFRL1', 'NNMT', 'PFKFB4', 'PRR5', 'SPINK1', 'OPHN1', 'KLRB1', 'ERP27', 'SELL', 'IRAK2', 'APOH', 'HSH2D', 'REEP6', 'KLK3', 'MAFK', 'ATP2C2', 'AGR2', 'ACOT9', 'ANG', 'CEACAM1'];
    // //Meteor.subscribe('clinical_events_index');
    // Meteor.subscribe('expression2', geneList, studyID);
    // console.log('expression2 subscription', 'studyId:', studyID, 'geneList:', geneList, s);
    //
    // Meteor.subscribe('mutations_cohort', studyID, geneList);
    // console.log('mutations_cohort subscription', 'studyId:', studyID, 'geneList:', geneList, s);
    //
    // Meteor.subscribe('correlator', sigNames, correlatorLimit);
    // console.log('correlator subscription', 'sigNames:', sigNames, 'correlatorLimit:', correlatorLimit, s);
    //
    // Meteor.subscribe('signature_scores_index', sigNames);
    // console.log('signature_scores_index subscription', 'sigNames:', sigNames, s);
    //
    // Meteor.subscribe('signature_index', studyID, sigNames);
    // console.log('signature_index subscription', 'studyId:', studyID, 'sigNames:', sigNames, s);
    // },

    waitOn : function() {
        var s = '<--- CohortController.waitOn in client/controllers/cohort.js';
        var studyID = Session.get("studyID");
        var geneList = Session.get("geneList");
        var sigNames = Session.get("signatureNames");
        var pivotSettings = Session.get("pivotSettings");

        var pName = null;
        var pDatatype = null;
        var pVersion = null;

        if (pivotSettings) {
            pName = pivotSettings['name'];
            pDatatype = pivotSettings['datatype'];
            pVersion = pivotSettings['version'];
        }

        // publish in /server/publish/correlator.js
        Meteor.subscribe("correlatorResults", pName, pDatatype, pVersion, studyID);

        // TODO need to add data for manually-selected genes and signatures
    },

    data : function() {
    },

    action : function() {
        this.render();
    }
});
