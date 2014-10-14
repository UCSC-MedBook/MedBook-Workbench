ScvController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
	  var g1 = this.params.g1;
	  var g2 = this.params.g2;
	  console.log('scv: group1: '+g1+' group2: '+g2);
	  return 
  },

  action: function () {
    this.render();
  }
});
