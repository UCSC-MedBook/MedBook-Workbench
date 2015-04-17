/*****************************************************************************/
/* Expression Publish Functions
 /*****************************************************************************/

Meteor.publish('correlator', function(Study_ID, contrast, topN) {
    if (!geneList) {
        // var geneList = ['PEG10', 'KCNJ6', 'FGF9', 'CNKSR3', 'ANK2', 'ST8SIA4', 'RUNX1T1', 'GPRIN2', 'KIT', 'GABRB3', 'IPCEF1', 'GRIN3A', 'CACHD1', 'GYG2', 'ADM', 'F2RL1', 'TMPRSS2', 'TEAD2', 'DHODH', 'FXYD3', 'SERTAD1', 'NQO1', 'DHCR24', 'BANK1', 'INO80C', 'SLC30A4', 'F5', 'HK2', 'PPARG', 'CXCL2', 'FGFRL1', 'NNMT', 'PFKFB4', 'PRR5', 'SPINK1', 'OPHN1', 'KLRB1', 'ERP27', 'SELL', 'IRAK2', 'APOH', 'HSH2D', 'REEP6', 'KLK3', 'MAFK', 'ATP2C2', 'AGR2', 'ACOT9', 'ANG', 'CEACAM1'];
        var geneList = [];
    }
    if (!contrast) {
        var constrast = ""
    }
    if (!Study_ID) {
        var Study_ID = ""
    }
    var nameCurs = Signature.find({'contrast':contrast},{'name':1}).fetch()
    var nameList = []
    nameCurs.forEach(function(sig) {
        console.log('found sig for contrast', contrast, sig)
        nameList.push(sig.name)
    })
    // console.log("find exp for this list: ",geneList);
    var findResult = Correlator.find({
        'name_1' : {
            $in : nameList
        },
        'Study_ID' : Study_ID
    });
    var count = findResult.count();
    console.log('correlator count', count, '<-- publish correlator in study', Study_ID, 'contrast');
    return findResult;
});
