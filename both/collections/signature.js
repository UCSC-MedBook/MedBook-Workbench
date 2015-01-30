
var Collections = {};
Signature = Collections.Signature = new Mongo.Collection("signature");

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
  studyID: {
      type: String,
      index: 1,
      unique: false, 	
  },
  contrast: {
	  type: Schemas.Contrast,
	  unique: false,
	  index: 1
  },
  version: {
      type: Number,
	  decimal: true,
      unique: false 	
  },
  signature: {
	  type: Object,
  }
});
Signature.attachSchema(Schemas.Signature);


UI.registerHelper("Collections", Collections);


Signature.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});
