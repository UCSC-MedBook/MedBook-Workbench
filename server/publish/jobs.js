/*****************************************************************************/
/* Jobs Publish Functions
/*****************************************************************************/

Meteor.publish('jobs', function () {

   var findResult = Jobs.find({user_id:this.userId});
   var count = findResult.count();
   console.log('Jobs count', count);
   return findResult;
});
