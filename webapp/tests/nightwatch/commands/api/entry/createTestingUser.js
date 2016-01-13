exports.command = function() {

  this
    .timeoutsAsyncScript(2000)
    .executeAsync(function(data, done){
      Accounts.createUser({
        email: 'testing@medbook.ucsc.edu',
        password: 'testing',
        profile: {
          collaborations: ['testing']
        }
      }, done);
    })
    .executeAsync(function(data, done) {
      Meteor.logout(done);
    })
  ;

  return this; // allows the command to be chained.
};
