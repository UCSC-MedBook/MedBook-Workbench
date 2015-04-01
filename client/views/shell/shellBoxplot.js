	
/*****************************************************************************/
/* Shell: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Boxplot.events({
	'click #boxplot': function(event,template){
		var contrastID = Session.get('selectedContrast')
		var gene = template.find('.input-sm').value
		console.log('run boxplot with contrast', contrastID, 'gene', gene)

		Meteor.call('boxplot_adapter', [contrastID, gene], function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "pathmark Error:" + err.reason);
				return;
			}
			Session.set('boxplot serverDataResponse', response);
			console.log('boxplot response: '+response);
		});
		$('#BoxPlot').hide()
	}	
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
Template.ShellBoxplot.rendered = function() {
     //Meteor.subscribe("Expression", "prad_wcdt");
     // genes = Expression.find({}, { sort: {gene:1 }, fields: {"gene":1 }})
     var $genelist = $("#genelist");
	 debugger;
      $genelist.select2({

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
              return {
                  results: data.items
              };
            },
            cache: true
          },
          escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
          minimumInputLength: 2,
      });
     $genelist.keydown(function(f) {
             alert("key");
     })
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


