/*****************************************************************************/
/* StudyGroupsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('study_groups_index', function () {
    var s = StudyGroups.find();
    var cnt = StudyGroups.find().count();
    console.log('StudyGroups count', cnt);
    return s;
});
