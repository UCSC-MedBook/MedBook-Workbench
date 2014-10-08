
/*****************************************************************************/
/* StudyGroupsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.StudyGroupsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.StudyGroupsIndex.helpers({
	studies: function(){
		console.dir(Session);
		var study = Session.get('studyID') ;
		return StudyGroups.find({study:study},{sort: {group:1}});
	}
});

/*****************************************************************************/
/* StudyGroupsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.StudyGroupsIndex.created = function () {
};

Template.StudyGroupsIndex.rendered = function () {
};

Template.StudyGroupsIndex.destroyed = function () {
};


