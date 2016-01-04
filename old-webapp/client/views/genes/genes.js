
/*****************************************************************************/
/* Genes: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.genesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
	'keyup #gq' : function (e, tmpl) {
		gene = e.target.value;
		if (_.contains(hugoGenes, gene.toUpperCase())) {
			console.log("match");
		}
		else {
			console.dir(e.target);
			console.log('not match', e.target.value);
		}
	},
	'change #gq' : function (e, tmpl) {
		console.log('change');
	},
	'click #lookupGene': function( e, tmpl){
		console.log('lookup gene');
	}
});

Template.Genes.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
	gene_name: function() {
		return gene_name;
	}
});

/*****************************************************************************/
/* Genes: Lifecycle Hooks */
/*****************************************************************************/
Template.Genes.created = function () {
};

Template.Genes.rendered = function () {
};

Template.Genes.destroyed = function () {
};


