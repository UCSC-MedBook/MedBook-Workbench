	
/*****************************************************************************/
/* Shell: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Boxplot.events({
	'click #boxplot': function(event,template){
		var contrastID = Session.get('selectedContrast')
		var genes = Session.get('genelist')
		console.log('run boxplot with contrast', contrastID, 'genes', genes)

		Meteor.call('boxplot_adapter', [contrastID, genes], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "boxplot Error:" + err.reason);
				return;
			}
			Session.set('boxplot serverDataResponse', response);
			console.log('boxplot response: '+response);
		});
		$('#BoxPlot').hide()
	},
	'click #violinplot': function(event,template){
		var contrastID = Session.get('selectedContrast')
		var genes = Session.get('genelist')
		console.log('run violinplot with contrast', contrastID, 'genes', genes)

		Meteor.call('violinplot_adapter', [contrastID, genes], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "violin plot Error:" + err.reason);
				return;
			}
			Session.set('violinplot serverDataResponse', response);
			console.log('violinplot response: '+response);
		});
		$('#BoxPlot').hide()
	},
	'click #isoformplot': function(event,template){
		var contrastID = Session.get('selectedContrast')
		var genes = Session.get('genelist')
		console.log('run isoformplot with contrast', contrastID, 'genes', genes)

		Meteor.call('isoformplot_adapter', [contrastID, genes], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "isoform plot Error:" + err.reason);
				return;
			}
			Session.set('isoformplot serverDataResponse', response);
			console.log('isoformplot response: '+response);
		});
		$('#BoxPlot').hide()
	},		
});

Template.ShellBoxplot.helpers({
	response1: function() {
		console.log('lookup response in session serverDataResponse');
		file_id = Session.get('serverDataResponse');
		return file_id;
	},
	blobs: function() {
		return Blobs.find();
	},
	selectedContrast: function(){
			var contrastID = Session.get('selectedContrast');
			return Contrast.find({_id:contrastID})
	}
});
Template.Boxplot.rendered = function() {
     //Meteor.subscribe("Expression", "prad_wcdt");
     // genes = Expression.find({}, { sort: {gene:1 }, fields: {"gene":1 }})
     var $genelist = $("#genelist");
	 var prev = ""
     $genelist.select2({
         initSelection : function (element, callback) {
              if (prev && prev.genelist)
                  callback( prev.genelist.map(function(g) { return { id: g, text: g }}) );
            },
          multiple: true,
          ajax: {
            url: "/wb/genes",
            dataType: 'json',
            delay: 250,
            data: function (term) {
              var qp = {
                q: term
              };
              return qp;
            },
            results: function (data, page, query) {
              // parse the results into the format expected by Select2.
              // since we are using custom formatting functions we do not need to
              // alter the remote JSON data
			   console.log('ajax returns', data.items)
              return {
                  results: data.items
              };
            },
            cache: true
          },
          escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
          minimumInputLength: 2,
      });
      if (prev && prev.genelist)
          $genelist.select2("val", prev.genelist );
      $genelist.on("change", function() {
         var genelist =  $(this).select2("val");
		 Session.set('genelist',genelist)
		 console.log('genelist changed ', genelist)
         //Meteor.subscribe("GeneExpression", "prad_wcdt", genelist);
         //Charts.update({ _id : prev._id }, {$set: {genelist: genelist}});
      });
};

/*****************************************************************************/
/* Shell: Lifecycle Hooks */
/*****************************************************************************/
Template.ShellBoxplot.created = function () {
};

Template.ShellBoxplot.rendered = function () {
};

Template.ShellBoxplot.destroyed = function () {
};


