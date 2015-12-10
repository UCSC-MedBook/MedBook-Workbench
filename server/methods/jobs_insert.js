Meteor.methods({
  insert_limma_job : function(args)
  {
    Jobs.insert({
      // TODO: don't insert on the client
      user_id: Meteor.userId(),
      name: "RunLimma",
      args: args
    });
  },
  insert_viper_job : function(args)
  {
    Jobs.insert({
      // TODO: don't insert on the client
      user_id: Meteor.userId(),
      name: "RunViper",
      args: args
    });
  }
});
