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
		signature: {
			type: Object,
			blackbox: true,
			optional: true
		}
	});
		
	Contrast.attachSchema(Schemas.Contrast);