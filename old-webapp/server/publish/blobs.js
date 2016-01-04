/*****************************************************************************/
/* Blobs Publish Functions
/*****************************************************************************/
Meteor.publish('blobs', function (id) {
  // you can remove this if you return a cursor
  return Blobs.find({});
});
