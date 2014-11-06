/*****************************************************************************/
/* Blobs Publish Functions
/*****************************************************************************/
Meteor.publish('blobs', function () {
  // you can remove this if you return a cursor
    return Blobs.find({});
});
Meteor.publish('images', function () {
        /*Uncomment this and comment out returning the cursor to see publication issue*/

        // var self = this;

        // var handle = Images.find().observe({
        //     added: function (document) {
        //         self.added('images', document._id, document);
        //     },
        //     changed: function (document) {
        //         self.changed('images', document._id, document);
        //     },
        //     removed: function (document) {
        //         self.removed('images', document._id);
        //     }
        // });

        // self.onStop(function () {
        //     handle.stop();
        // });

        /*Comment this out and Uncomment manual publishing to see publication issue*/

        return Images.find();

    });
