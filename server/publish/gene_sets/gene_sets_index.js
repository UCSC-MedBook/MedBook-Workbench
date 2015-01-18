/*****************************************************************************/
/* GeneSetsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('gene_sets_index', function () {
    var findResults = GeneSets.find();
    var count = findResults.count();
    console.log('GeneSets count', count, '<-- publish geneSets');
    return findResults;
});