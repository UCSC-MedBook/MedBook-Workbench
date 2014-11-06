/*****************************************************************************/
/* Blobs Publish Functions
/*****************************************************************************/
Meteor.publish('blobs', function () {
  // you can remove this if you return a cursor
    return Blobs.find({});
});
