/*****************************************************************************/
/* MutationsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('mutations_index', function (study) {
    var m = Mutations.find({study:study});
    var cnt = Mutations.find({study:study}).count();
    console.log('Mutation count', cnt);
    return m;
});
