exports.command = function(username, password) {

  this
    .waitForElementVisible('#login-buttons', 1000)
    .click("#login-sign-in-link").pause(400)
      .verify.elementPresent("#login-dropdown-list")
      .verify.elementPresent("#login-email")
      .verify.elementPresent("#login-password")

      .setValue("#login-email", username)
      .setValue("#login-password", password)

    .click("#login-buttons-password").pause(1000)
  ;

  return this; // allows the command to be chained.
};
