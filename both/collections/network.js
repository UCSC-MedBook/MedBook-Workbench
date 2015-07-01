Network = Collections.Network = new Meteor.Collection('network');

Schemas.XYPosition = new SimpleSchema({
    x : {
        type : Number,
        label : "X"
    },
    y : {
        type : Number,
        label : "Y"
    }
});

Schemas.NetworkElement = new SimpleSchema({
    name : {
        type : String,
        label : "Element"
    },
    type : {
        type : String,
        label : "Type",
    },
    position : {
        type : Schemas.XYPosition,
        label : "Position",
        optional : true
    },
    members : {
        type : [Object],
    },
    "members.$" : {
        type : Schemas.NetworkElement
    }
});

Schemas.Interaction = new SimpleSchema({
    source : {
        type : String,
        label : "Source"
    },
    target : {
        type : String,
        label : "Target"
    },
    type : {
        type : String,
        label : "Type",
    },
    score : {
        type : Number,
        label : "Score",
        optional : true
    }
});

Schemas.Network = new SimpleSchema({
    name : {
        type : String,
        label : "Name",
        max : 200
    },
    version : {
        type : Number,
        label : "Version",
        decimal : true,
        unique : false
    },
    source : {
        type : String,
        label : "Source URL:",
        optional : true
    },
    elements : {
        type : [Object]
    },
    "elements.$" : {
        type : Schemas.NetworkElement
    },
    interactions : {
        type : [Object]
    },
    "interactions.$" : {
        type : Schemas.Interaction
    }
});
Network.attachSchema(Schemas.Interaction);
