/*
 * Add query methods like this:
 *  StudyGroups.findPublic = function () {
 *    return StudyGroups.find({is_public: true});
 *  }
 */

StudyGroups.allow({
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

StudyGroups.deny({
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
