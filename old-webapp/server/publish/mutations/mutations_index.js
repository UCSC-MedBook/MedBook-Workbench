/*****************************************************************************/
/* MutationsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('mutations_index', function (study) {
	var user = this.userId
	db.users.find({'profile.collaborations':{$in:user.profile.collaborations	}})
    var m = Mutations.find({study:study});
    var cnt = Mutations.find({study:study}).count();
    console.log('Mutation count', cnt);
    return m;
});
