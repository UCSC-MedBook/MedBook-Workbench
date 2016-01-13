exports.command = function(username, password) {
  this
    .waitForElementVisible(".navbar-fixed-top", 2000)
    .verify.containsText(".navbar-brand", "MedBook")
    .verify.containsText("#workbench-navbar-collapse > ul.navbar-nav:nth-child(1) > li:nth-child(1)", "History")
    .verify.containsText("#workbench-navbar-collapse > ul.navbar-nav:nth-child(1) > li:nth-child(2)", "Limma")
    .verify.containsText("#workbench-navbar-collapse > ul.navbar-right > li.dropdown", "Apps")
    .verify.elementPresent("#login-buttons")
  ;

  return this; // allows the command to be chained.
};
