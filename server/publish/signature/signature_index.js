/*****************************************************************************/
/* SignatureIndex Publish Functions
 /*****************************************************************************/

Meteor.publish('signature_index', function(study, sigNames) {
    var s = '<--- publish signature_index in server/publish/signature/signature_index.js';

    // console.log('sigNames:', sigNames.join(), s);

    var findResult;
    if (sigNames) {
        var sanitizedSigNames = [];
        for (var i = 0, length = sigNames.length; i < length; i++) {
            // signature names in this mongo collection do not have version number suffixed
            var sigName = sigNames[i];
            var fields = sigName.split('_v');
            fields.pop();
            sanitizedSigNames.push(fields.join('_v'));
        }
        // console.log('sanitizedSigNames:', sanitizedSigNames.join(), s);
        findResult = Signature.find({
            'studyID' : study,
            'name' : {
                $in : sanitizedSigNames
            }
        });
    } else {
        // console.log('NO SIGNATURE NAMES WERE SPECIFIED', s);
        findResult = Signature.find({
            'studyID' : {
                $in : []
            }
        });
    }

    console.log('signature_index for ',sigNames, 'count:', findResult.count(), 'study:', study, s);

    return findResult;
});
