CohortController = RouteController.extend({
	
    waitOn : function() {
		var geneList = Session.get('geneList');
        Meteor.subscribe('clinical_events_index');
        Meteor.subscribe('expression', geneList);
    },

    data : function() {
    },

    action : function() {
        this.render();
    }
});
