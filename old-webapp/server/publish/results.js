/*****************************************************************************/
/* Results Publish Functions
/*****************************************************************************/

Meteor.publish('results', function () {
   var findResult = Results.find();
   var count = findResult.count();
   console.log('results count', count)
   return findResult;
});
