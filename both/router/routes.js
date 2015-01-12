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


Router.map(function () {
 
  this.route('/wb', {name: 'studies.index'});
  this.route('/wb/scv', {name:'scv'});
  this.route('/wb/scv/:_id',  function () {
  		var params = this.params; 
  		var id = params._id; 
	}, {
		name:'scv.contrast'
	});
  this.route('/wb/sampleGroups/:study/:name', {name:'sample.groups.index'});
  this.route('/wb/clinical', {name:'clinical.events.index'});
  this.route('/wb/shell', {name:'shell'});
  //this.route('/wb/gene', {name:'genes.index'});
  this.route('/wb/gene/:name', {name:'genes'});
  this.route('/wb/drug', {name:'drugs'});
  this.route('/wb/cohort', {name:'cohort'});
  this.route('/wb/pathway', {name: 'pathways' });
  this.route('/wb/patient/', {name: 'patient.index' })
  this.route('/wb/patient/:name', {name: 'patient' })
  this.route( '/wb/signature', {name: 'signature.index'});
  this.route( '/wb/signatureForm', {name: 'SignatureForm'}); 
  this.route( '/wb/sig.score', {name: 'signature.scores.index'});
});
