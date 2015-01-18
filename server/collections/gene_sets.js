/*
 * Add query methods like this:
 *  GeneSets.findPublic = function () {
 *    return GeneSets.find({is_public: true});
 *  }
 */
GeneSets.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

GeneSets.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});