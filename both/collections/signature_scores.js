
var Collections = {};
SignatureScores = Collections.SignatureScores = new Mongo.Collection("signature_scores");

Schemas = {};

UI.registerHelper("Schemas", Schemas);

Schemas.SignatureScores = new SimpleSchema({
  name: {
      type: String,
      index: 1,
      unique: false
  },
  gene: {
      type: String,
	  index: 1,
	  unique: true	  
  },
  weight: {
    type: Number,
	decimal: true,
    optional: true
  },
  version: {
      type: Number,
	  decimal: true,
      unique: false 	
  }	
})
