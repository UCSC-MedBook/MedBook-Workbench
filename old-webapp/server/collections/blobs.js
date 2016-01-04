/*
 * Add query methods like this:
 *  Blobs.findPublic = function () {
 *    return Blobs.find({is_public: true});
 *  }
 */

Blobs.allow({
    insert: function (userId, doc) {
        return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
        return true;
    },

    remove: function (userId, doc) {
        return true;
    },

    download: function (userId, fileObj) {
        return true;
    }
});

Blobs.deny({
    insert: function (userId, doc) {
        return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
        return false;
    },

    remove: function (userId, doc) {
        return false;
    },

    download: function (userId, fileObj) {
        return false;
    }
});
