GenesController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
	  console.log('genes controller',this)
	  gene_name = this.params.name;
	  console.log('gene: ', gene_name);
 
  },

  action: function () {
    this.render();
  }
});
