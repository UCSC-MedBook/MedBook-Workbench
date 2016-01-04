/*
 * Add query methods like this:
 *  SignatureScores.findPublic = function () {
 *    return SignatureScores.find({is_public: true});
 *  }
 */

SignatureScores.allow({
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

SignatureScores.deny({
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
