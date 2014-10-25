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

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('studies.index', {path: '/wb'});
  this.route('cohort', {path: '/wb/cohort'});
  this.route('scv', {path: '/wb/scv'});
  this.route('scv', {path: '/wb/scv/'}, function(){
	  console.log('route '+this.hash);
  });
  this.route('sample.groups.index', {path: '/wb/sampleGroups'});
  this.route('clinical.events.index', {path: '/wb/clinical'});
  this.route('shell', {path: '/wb/shell/:name'});
  this.route('genes', {path: '/wb/gene'});
  this.route('drugs', {path: '/wb/drug'});
  this.route('cohort', {path: '/wb/cohort'});
  this.route('pathways', {path: '/wb/pathway'});
  this.route('results', {path: '/'});
  this.route('results', {path: '/'});
});
