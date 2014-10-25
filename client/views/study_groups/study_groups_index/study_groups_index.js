
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
	study_groups: function(){
		var study = Session.get('studyID') ;
		console.log('find studygroups for studyID:'+study);
		return StudyGroups.find({study:study},{sort: {group:1}});
	},
	isSelected: function(item){
	
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


