//Signature = new Meteor.Collection('signature');

/*
 * Add query methods like this:
 *  Signature.findPublic = function () {
 *    return Signature.find({is_public: true});
 *  }
 */
Schemas = {};

UI.registerHelper("Schemas", Schemas);

Schemas.Signature = new SimpleSchema({
  name: {
      type: String,
      index: 1,
      unique: false
  },
  gene: {
    type: String,
    index: 1,
    unique: false
  },
  weight: {
    type: Number,
    optional: true
  }
});

var Collections = {};

UI.registerHelper("Collections", Collections);

Signature = Collections.Signature = new Mongo.Collection("signature");
Signature.attachSchema(Schemas.Signature);
Signature.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});
