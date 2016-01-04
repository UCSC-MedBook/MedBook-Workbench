/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Meteor.startup(function () {

console.log('router started');
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.onBeforeAction(function() {
	console.log('onBefore params', this.params);
 	Session.set('studyID', this.params.query.study);
	console.log('set session studyID', this.params.query.study);
	this.next();
	console.log('onBeforeAction this.route.path(): ',this.route.path());

});

Router.route('/wb', {name:'StudiesIndex'});
Router.route('/wb/scv',{name: 'Scv',controller: 'ScvController'});
//Router.route('/wb/scv/:_id',{name:'Scv',controller: 'ScvController'});
Router.route('/wb/scv/edit',{name:'ScvContrastEdit', controller: 'ScvController', action: 'edit'});
Router.route('/wb/results/:_id',{name:'Results'});
Router.route('/wb/jobs/:_id',{name:'Jobs'});
Router.route('/wb/sampleGroups/:study/:name', {name:'SampleGroupsIndex'});
Router.route('/wb/clinical', {name:'ClinicalEventsIndex'});
Router.route('/wb/shell/limma/:contrast', {template:'ShellLimma'}, {controller:'Shell'});
Router.route('/wb/shell/gsea/:signature', {template:'ShellGsea'}, {controller:'Shell'});
Router.route('/wb/shell/boxplot/:contrast', {template:'ShellBoxplot'}, {controller:'Shell'});
Router.route('/wb/shell', {name:'Shell'});
Router.route('/wb/geneSets/', {name: 'GeneSetsIndex'});
//Router.route('/wb/genes', {name:'GenesIndex'});
Router.route('/wb/gene/:name', {name:'Genes'});
Router.route('/wb/drug', {name:'Drugs'});
Router.route('/wb/cohort', {name:'Cohort'});
Router.route('/wb/pathway', {name:'Pathways'});
Router.route('/wb/patient/', {name:'PatientIndex'});
Router.route('/wb/patient/:name', {name:'Patient'});
Router.route( '/wb/signature', {name:'SignatureIndex'});
Router.route( '/wb/signatureForm', {name:'SignatureForm'});
Router.route( '/wb/sig.score',{name: 'SignatureScoresIndex'});

});
