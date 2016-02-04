// CohortController = RouteController.extend({
// waitOn : function() {
// var s = '<--- CohortController.waitOn in client/controllers/cohort.js';
// var studyID = Session.get("studyID");
// var selectedContrast = Session.get("selectedContrast");
// var pivotSettings = Session.get("pivotSettings");
// var pagingConfig = Session.get("subscriptionPaging") || {};
//
// var lockedEvents = Session.get("lockedEvents") || {};
//
// var sessionGeneLists = {
// "geneList" : _.compact(Session.get("geneList")) || [],
// "cohort_tab_genelist_widget" : Session.get("cohort_tab_genelist_widget") || [],
// "focusGenes" : Session.get("focusGenes") || []
// };
//
// console.log("sessionGeneLists", sessionGeneLists);
//
// var pName = null;
// var pDatatype = null;
// var pVersion = null;
//
// console.log("pivotSettings", pivotSettings, s);
//
// if (pivotSettings != null) {
// pName = pivotSettings['name'];
// pDatatype = pivotSettings['datatype'];
// pVersion = pivotSettings['version'];
// }
//
// // publish in /server/publish/correlator.js
// Meteor.subscribe("correlatorResults", pName, pDatatype, pVersion, studyID, selectedContrast, pagingConfig, sessionGeneLists, lockedEvents);
// },
//
// data : function() {
// },
//
// action : function() {
// this.render();
// }
// });

CohortController = RouteController.extend(obsDeckRouteControllerSettings);
