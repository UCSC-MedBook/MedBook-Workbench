/*****************************************************************************/
/* Expression Publish Functions
 /*****************************************************************************/

// Meteor.publish('expression2', function(geneList, Study_ID) {
    // var s = "<--- publish expression2 in server/publish/expression2.js";
    // if (!geneList) {
        // // var geneList = ['PEG10', 'KCNJ6', 'FGF9', 'CNKSR3', 'ANK2', 'ST8SIA4', 'RUNX1T1', 'GPRIN2', 'KIT', 'GABRB3', 'IPCEF1', 'GRIN3A', 'CACHD1', 'GYG2', 'ADM', 'F2RL1', 'TMPRSS2', 'TEAD2', 'DHODH', 'FXYD3', 'SERTAD1', 'NQO1', 'DHCR24', 'BANK1', 'INO80C', 'SLC30A4', 'F5', 'HK2', 'PPARG', 'CXCL2', 'FGFRL1', 'NNMT', 'PFKFB4', 'PRR5', 'SPINK1', 'OPHN1', 'KLRB1', 'ERP27', 'SELL', 'IRAK2', 'APOH', 'HSH2D', 'REEP6', 'KLK3', 'MAFK', 'ATP2C2', 'AGR2', 'ACOT9', 'ANG', 'CEACAM1'];
        // var geneList = [];
    // }
    // if (!Study_ID) {
        // var Study_ID = "";
    // }
    // // console.log("find exp for this list: ",geneList);
    // var findResult = Expression2.find({
        // 'gene' : {
            // $in : geneList
        // },
        // 'Study_ID' : Study_ID
    // });
    // console.log('expression2 count:', findResult.count(), "Study_ID:", Study_ID, s, 'geneList', geneList);
    // if (findResult.count() == 0) {
        // return;
    // }
    // return findResult;
// });

// TODO paged expression subscription
// Meteor.publish('expression2_paged', function(geneList, Study_ID, pageNum) {
// var s = "<--- publish expression2_paged in server/publish/expression2.js";
// console.log("pageNum", pageNum, s);
// var docsPerPage = 3;
// if (!geneList) {
// var geneList = [];
// }
// if (!Study_ID) {
// var Study_ID = "";
// }
//
// var selector = {
// 'gene' : {
// $in : geneList
// },
// 'Study_ID' : Study_ID
// };
//
// var options = {
// 'skip' : (pageNum * docsPerPage),
// 'limit' : docsPerPage
// };
//
// var findResult = Expression2.find(selector, options);
// console.log('expression2_paged', 'count:', findResult.count(), "selector", selector, "options", options, s);
// if (findResult.count() == 0) {
// return;
// }
// return findResult;
// });
