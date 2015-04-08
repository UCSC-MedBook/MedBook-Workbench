/*****************************************************************************/
/* ExpressionIsoform Publish Functions
 /*****************************************************************************/

Meteor.publish('expression_isoform', function(geneList) {
    if (!geneList) {
        var geneList = ['KLK3'];
    }
    var findResult = ExpressionIsoform.find({
        'gene' : {
            $in : geneList
        }
    });
    var count = findResult.count();
    console.log('isoform count', count, '<-- publish expression_isoform');
    return findResult;
});