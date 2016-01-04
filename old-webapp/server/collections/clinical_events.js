/*
 * Add query methods like this:
 *  ClinicalEvents.findPublic = function () {
 *    return ClinicalEvents.find({is_public: true});
 *  }
 */

ClinicalEvents.allow({
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

ClinicalEvents.deny({
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
