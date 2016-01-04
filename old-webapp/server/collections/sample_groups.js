/*
 * Add query methods like this:
 *  SampleGroups.findPublic = function () {
 *    return SampleGroups.find({is_public: true});
 *  }
 */

SampleGroups.allow({
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

SampleGroups.deny({
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
