/*****************************************************************************/
/* PatientIndex Publish Functions
/*****************************************************************************/

Meteor.publish('patient_index', function () {
  	var p = Patient.find({study:study, sample:name});
    var cnt = Patient.find({study:study, sample:name}).count();
    console.log('Patient count for ', name, cnt);
    return p;
});
