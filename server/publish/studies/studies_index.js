/*****************************************************************************/
/* StudiesIndex Publish Functions
/*****************************************************************************/
	Meteor.publish('studies_index', function () {
		var collaborations = ["public"]
		if (this.userId) {
			var user_record = Meteor.users.findOne({_id:this.userId}, {_id:0,'profile.collaborations':1})
			console.log('concat',user_record.profile.collaborations)
			collaborations = collaborations.concat(user_record.profile.collaborations)
		}
		var cnt = Studies.find({collaborations: {$in: collaborations}}).count();
		console.log ('member of',cnt, 'study based on ',collaborations)
		return Studies.find({collaborations: {$in: collaborations}});
	});
