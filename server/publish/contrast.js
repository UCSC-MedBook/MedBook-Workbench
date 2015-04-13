/*****************************************************************************/
/* Contrast Publish Functions
/*****************************************************************************/

Meteor.publish('contrast', function () {
	var collaborations = ["public"]
	console.log("contrast: USER", this.userId)
	if (this.userId) {
		var user_record = Meteor.users.findOne({_id:this.userId}, {_id:0,'profile.collaborations':1})
		collaborations = user_record.profile.collaborations 
	}
	console.log ('member of ',collaborations)
	return Contrast.find({collaborations: {$in: collaborations}});
});
