exports.command = function(username, password) {

  this
    .waitForElementVisible('#login-buttons', 5000)
    .click("#login-sign-in-link").pause(1000)
      .verify.elementPresent("#login-dropdown-list")
      .verify.elementPresent("#login-email")
      .verify.elementPresent("#login-password")

      .setValue("#login-email", username)
      .setValue("#login-password", password)

    .click("#login-buttons-password")
    .waitForElementVisible("#login-name-link", 5000)
  ;

  return this; // allows the command to be chained.
};
