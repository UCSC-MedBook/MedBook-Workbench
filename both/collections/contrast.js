	Contrast = new Meteor.Collection('contrast');
	var Schemas = {};

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
	});
		
	Contrast.attachSchema(Schemas.Contrast);