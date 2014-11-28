blobStore = new FS.Store.GridFS("blobs");

Blobs = new FS.Collection("blobs", {
    stores: [blobStore]
});
