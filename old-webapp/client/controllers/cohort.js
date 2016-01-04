CohortController = RouteController.extend({
    waitOn : function() {
        var s = '<--- CohortController.waitOn in client/controllers/cohort.js';
        var studyID = Session.get("studyID");
        var geneList = Session.get("geneList") || [];
        // var sigNames = Session.get("signatureNames");
        var pivotSettings = Session.get("pivotSettings");
        var pagingConfig = Session.get("subscriptionPaging") || {};

        var widgetGenelist = Session.get("cohort_tab_genelist_widget") || [];

        var geneList = _.uniq(geneList.concat(widgetGenelist));

        var pName = null;
        var pDatatype = null;
        var pVersion = null;

        console.log("pivotSettings", pivotSettings, s);

        if (pivotSettings != null) {
            pName = pivotSettings['name'];
            pDatatype = pivotSettings['datatype'];
            pVersion = pivotSettings['version'];
        }

        // publish in /server/publish/correlator.js
        Meteor.subscribe("correlatorResults", pName, pDatatype, pVersion, studyID, pagingConfig, geneList);
    },

    data : function() {
    },

    action : function() {
        this.render();
    }
});
