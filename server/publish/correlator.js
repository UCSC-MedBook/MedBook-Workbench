/*****************************************************************************/
/* Expression Publish Functions
/*****************************************************************************/

/*
Meteor.publish('correlator', function(Study_ID, contrast, topN) {
var s = "<--- publish correlator in server/publish/correlator.js";
// if (!geneList) {
// // var geneList = ['PEG10', 'KCNJ6', 'FGF9', 'CNKSR3', 'ANK2', 'ST8SIA4', 'RUNX1T1', 'GPRIN2', 'KIT', 'GABRB3', 'IPCEF1', 'GRIN3A', 'CACHD1', 'GYG2', 'ADM', 'F2RL1', 'TMPRSS2', 'TEAD2', 'DHODH', 'FXYD3', 'SERTAD1', 'NQO1', 'DHCR24', 'BANK1', 'INO80C', 'SLC30A4', 'F5', 'HK2', 'PPARG', 'CXCL2', 'FGFRL1', 'NNMT', 'PFKFB4', 'PRR5', 'SPINK1', 'OPHN1', 'KLRB1', 'ERP27', 'SELL', 'IRAK2', 'APOH', 'HSH2D', 'REEP6', 'KLK3', 'MAFK', 'ATP2C2', 'AGR2', 'ACOT9', 'ANG', 'CEACAM1'];
// var geneList = [];
// }
if (!contrast) {
var constrast = "";
}

// if (!Study_ID) {
// var Study_ID = "";
// }

var nameCurs = Signature.find({
'contrast' : contrast
}, {
'name' : 1
}).fetch();
var nameList = [];
nameCurs.forEach(function(sig) {
// console.log('found sig for contrast', contrast, sig.name);
nameList.push(sig.name);
});
// console.log("find corr for this list: ", nameList);
var findResult = Correlator.find({
'name_1' : {
$in : nameList
}
});
console.log('correlator count:', findResult.count(), 'contrast:', contrast, s);
return findResult;
});
*/

// Meteor.publish('correlator', function(sigNames, topN) {
// var s = "<--- publish correlator in server/publish/correlator.js";
//
// var nameList = [];
// if (sigNames) {
// for (var i = 0, length = sigNames.length; i < length; i++) {
// var sigName = sigNames[i];
// var fields = sigName.split('_v');
// fields.pop();
// var rootName = fields.join('_v');
// nameList.push(rootName);
// }
// }
//
// var findResult = Correlator.find({
// 'name_1' : {
// $in : nameList
// }
// });
// console.log('correlator ',sigNames, 'count:', findResult.count(), 'nameList', nameList.join(), s);
// return findResult;
// });

Meteor.publish('correlator', function(pivotEvent, topN) {
    var s = "<--- publish correlator in server/publish/correlator.js";

    if (pivotEvent == null) {
        return null;
    }

    var fields = pivotEvent.split('_v');
    var version_num = "1";
    if (fields.length > 1) {
        version_num = fields.pop();
    }
    var rootName = fields.join('_v');

    var findResult = Correlator.find({
        'name_1' : rootName
    });

    console.log('correlator for', rootName, 'count:', findResult.count(), s);
    return findResult;
});
