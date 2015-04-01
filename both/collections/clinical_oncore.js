Schemas = {}
Collections = {}

ClinicalOncore = Collections.ClinicalOncore = new Mongo.Collection("clinical_oncore");


UI.registerHelper("Schemas", Schemas);

Schemas.ECOG_Weight = new SimpleSchema({
    Segment: {
        type: String,
        unique: false
    },
    Weight: {
        type: Number,
    	decimal: true,
  	    unique: false	  
    }
});
//ECOG_Weight.attachSchema(Schemas.ECOG_Weight);

Schemas.ClinicalOncore = new SimpleSchema({
  patient: {
      type: String,
      index: 1,
      unique: false
  },
  version: {
      type: Number,
	  index: 1,
	  optional: true,
	  unique: false	  
  },
  Demographics: {
    type: Object,
    optional: true
  },
  ECOG_Weight: {
    type: [Schemas.ECOG_Weight],
    optional: true
  }

});
ClinicalOncore.attachSchema(Schemas.ClinicalOncore);


UI.registerHelper("Collections", Collections);


ClinicalOncore.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});
