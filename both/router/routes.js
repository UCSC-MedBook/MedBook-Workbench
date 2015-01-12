/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

/*Router.onBeforeAction(function() {
	console.log('BEFORE route: ',this.path);
	
});*/

Router.route('/wb', {name:'StudiesIndex'});
Router.route('/wb/scv',{name: 'Scv'});
Router.route('/wb/scv/:_id',{name:'ScvContrast'},  function () {
  		var params = this.params; 
  		var id = params._id; 
	});
Router.route('/wb/sampleGroups/:study/:name', {name:'SampleGroupsIndex'});
Router.route('/wb/clinical', {name:'ClinicalEventsIndex'});
Router.route('/wb/shell', {name:'Shell'});
Router.route('/wb/gene', {name:'GenesIndex'});
Router.route('/wb/gene/:name', {name:'Genes'});
Router.route('/wb/drug', {name:'Drugs'});
Router.route('/wb/cohort', {name:'Cohort'});
Router.route('/wb/pathway', {name:'Pathways'});
Router.route('/wb/patient/', {name:'PatientIndex'})
Router.route('/wb/patient/:name', {name:'Patient'})
Router.route( '/wb/signature', {name:'SignatureIndex'});
Router.route( '/wb/signatureForm', {name:'SignatureForm'}); 
Router.route( '/wb/sig.score',{name: 'SignatureScoresIndex'});
