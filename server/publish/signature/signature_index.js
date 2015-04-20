/*****************************************************************************/
/* SignatureIndex Publish Functions
 /*****************************************************************************/

Meteor.publish('signature_index', function(study) {
    var s = '<--- publish signature_index in server/publish/signature/signature_index.js';

    var findResult = Signature.find({
        'studyID' : study
    });

    console.log('signature_index count:', findResult.count(), 'study:', study, s);

    return findResult;
});