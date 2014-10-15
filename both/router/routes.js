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
  this.route('studies.index', {path: '/'});
  this.route('study.groups.index', {path: '/studyGroups'});
  this.route('scv', {path: '/scv/:g1/:g2'});
  this.route('sample.groups.index', {path: '/sampleGroups'});
  this.route('clinical.events.index', {path: '/clinical'});
  this.route('shell', {path: '/shell/:name'});
  this.route('genes', {path: '/gene'});
  this.route('drugs', {path: '/'});
});
