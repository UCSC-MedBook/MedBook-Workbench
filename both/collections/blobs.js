//Blobs = new FileCollection('blobs');
var blobStore = new FS.Store.GridFS("blobs", {
  mongoUrl: 'mongodb://127.0.0.1:27017/MedBook/', // optional, defaults to Meteor's local MongoDB
  mongoOptions: {...},  // optional, see note below
  maxTries: 1, // optional, default 5
  chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});

Blobs = new FS.Collection("blobs", {
  stores: [blobStore]
});
/*
 * Add query methods like this:
 *  Blobs.findPublic = function () {
 *    return Blobs.find({is_public: true});
 *  }
 */
Images = new FS.Collection("images", {
    stores: [thumbnailStore, masterStore],
    filter: {
        maxSize: 10485760, //in bytes
        allow: {
            contentTypes: ['image/*'],
            extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG', 'gif', 'GIF']
        },
        onInvalid: function (message) {
            alert(message);
        }
    }
});
//Use allow to control insert, update, remove and download. In this case we will just allow them all.
Images.allow({
    insert: function(userId, file) {
        return true;
    },
    update: function(userId, file, fields, modifier) {
        return true;
    },
    remove: function(userId, file) {
        return true;
    },
    download: function() {
        return true;
    }
});
