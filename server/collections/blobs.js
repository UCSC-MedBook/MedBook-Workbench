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

  read: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  write: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

Blobs.deny({
  insert: function (userId, doc) {
    return false;
  },
  
  read: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  write: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
