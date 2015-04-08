ExpressionIsoform = Collections.ExpressionIsoform = new Mongo.Collection("expression_isoform");


UI.registerHelper("Schemas", Schemas);

Schemas.ExpressionIsoform = new SimpleSchema({
})

Schemas.ExpressionIsoform = new SimpleSchema({
    gene: {
        type: String,
        unique: false
    },
    transcript: {
        type: String,
        unique: false
    },
    studyID: {
        type: String,
  	    unique: false	  
    },
	samples: {
		type: Object,
		optional: true
	}
})

ExpressionIsoform.attachSchema(Schemas.ExpressionIsoform);
