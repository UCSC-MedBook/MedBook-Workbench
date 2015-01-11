
/*****************************************************************************/
/* Results: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Results.events({
	'click .resultTableRow': function( e, tmpl){
		var r = $(e.target).data("_id");
		Session.set('selectedResult',r);
		console.log('switch results:',r);
	}  
});

Template.Results.helpers({
	mimeSpecificResult: function() {
		var id = Session.get('selectedResult');
		return Results.findOne({_id: id});
	},
	results: function() {
		console.log('results helper', Results.find({}));
		return Results.find({});
	}
});

/*****************************************************************************/
/* Results: Lifecycle Hooks */
/*****************************************************************************/
Template.Results.created = function () {
};

Template.Results.rendered = function () {
};

Template.Results.destroyed = function () {
};


