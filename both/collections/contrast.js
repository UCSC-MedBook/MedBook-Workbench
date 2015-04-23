	Contrast = Collections.Contrast = new Meteor.Collection('contrast');

	Schemas.Contrast = new SimpleSchema({
	    name: {
	        type: String,
	        label: "Name",
	        max: 200
	    },
	    studyID: {
	        type: String,
	        label: "Study"
	    },
		collaborations: {
			type: [String]
		},
		group1: {
		    type: String,
		    label: "Group1"
		},
		group2: {
		    type: String,
		    label: "Group2"
		},
		list1: {
		    type: [String],
		    label: "List of Samples for Group1"
		},
		list2: {
		    type: [String],
		    label: "List of Samples for Group2"
		},
		userId: {
			type: String
		},
		default_signature_id: {
			type: Object,
			blackbox: true,
			optional: true,
		},
		default_signature_name: {
			type: String,
			optional: true
		},
		default_signature_version: {
		    type: Number,
		  	decimal: true,
		    unique: false 	
		}	
	});
		
	Contrast.attachSchema(Schemas.Contrast);