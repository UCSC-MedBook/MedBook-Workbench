Meteor.publish('mutations_sample', function (study, name) {
    var m = Mutations.find({study:study, sample:name});
    var cnt = Mutations.find({study:study, sample:name}).count();
    console.log('Mutation count for ', name, cnt);
    return m;
});
