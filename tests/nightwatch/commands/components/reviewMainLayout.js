exports.command = function(username, password) {
  this
    .verify.elementPresent("#MedBookImage")
      // .verify.elementPresent("#navbarHeader")
        // .verify.elementPresent("#contentContainer")
        // .verify.elementPresent("#contentContainer .content-scrollable")
      // .verify.elementPresent("#navbarFooter")

  return this; // allows the command to be chained.
};
