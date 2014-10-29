CohortController = RouteController.extend({
    waitOn : function() {
        Meteor.subscribe('clinical_events_index');
        Meteor.subscribe('expression');
    },

    data : function() {
    },

    action : function() {
        this.render();
    }
});
