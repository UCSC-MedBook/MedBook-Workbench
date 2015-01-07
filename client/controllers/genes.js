GenesController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
	  gene_name = this.params.name;
	  console.log('gene: ', gene_name);
 
  },

  action: function () {
    this.render();
  }
});
