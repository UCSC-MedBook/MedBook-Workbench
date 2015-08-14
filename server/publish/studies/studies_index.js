/*****************************************************************************/
/* StudiesIndex Publish Functions
 /*****************************************************************************/
Meteor.publish('studies_index', function() {
    var collaborations = ["public"];
    if (this.userId) {
        var user_record = Meteor.users.findOne({
            _id : this.userId
        }, {
            _id : 0,
            'profile.collaborations' : 1
        });
        // console.log('concat', user_record.profile.collaborations);
        collaborations = collaborations.concat(user_record.profile.collaborations);
    }
    var curs = Studies.find({
        collaborations : {
            $in : collaborations
        }
    });
    // console.log('member of', curs.count(), 'study based on ', collaborations);
    return curs;
});
