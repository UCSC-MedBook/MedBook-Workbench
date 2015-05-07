Network = Collections.Network = new Meteor.Collection('network');

Schemas.NetworkElement = new SimpleSchema({
	name: {
		type: String,
		label: "Element"
	},
	type: {
		type: String,
		label: "Type",
	},
	members: [NetworkElement],
	}

Schemas.Interaction = new SimpleSchema({
	source: {
		type: String,
		label: "Source"
	},
	target: {
		type: String,
		label: "Target"
	},
	type: {
		type: String,
		label: "Type",
	},
	strength: {
		type: Number,
		label: "Strength",
		optional: true
	}

Schemas.Network = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
	version: {
		type: Number,
		label: "Version",
	  	decimal: true,
      	unique: false 		
	},
	source: {
		type: String,
		label: "Source URL:",
		optional: true
	}
	elements: [Schemas.NetworkElement],
	interaction: [Schema.Interaction]
}
		
	
