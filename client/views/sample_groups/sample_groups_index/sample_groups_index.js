
/*****************************************************************************/
/* SampleGroupsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.SampleGroupsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.SampleGroupsIndex.helpers({
    sample_groups : function() {
        var response = SampleGroups.find({});
        var docList = response.fetch();
        return response;
    }
});

/*****************************************************************************/
/* SampleGroupsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.SampleGroupsIndex.created = function () {
};

Template.SampleGroupsIndex.rendered = function () {
};

Template.SampleGroupsIndex.destroyed = function () {
};


