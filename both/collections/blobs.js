Blobs = new FileCollection('blobs');
/*var blobStore = new FS.Store.GridFS("blobs", {
  mongoUrl: 'mongodb://127.0.0.1:27017/MedBook/', // optional, defaults to Meteor's local MongoDB
  maxTries: 1, // optional, default 5
  chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});

Blobs = new FS.Collection("blobs", {
  stores: [blobStore]
});

   Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});*/