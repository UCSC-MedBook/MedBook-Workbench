/*****************************************************************************/
/* Blobs Publish Functions
/*****************************************************************************/
Meteor.publish('blobs', function () {
  // you can remove this if you return a cursor
	var count = Blobs.find({}).count();
	console.log("blob count", count)
    return Blobs.find({});
});
