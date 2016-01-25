module.exports = {
  tags: ["general", "travis"],
  "Do general tests: history page, welcome, etc.": function (client) {
    // set some preliminary variables
    client.globals.waitForConditionTimeout = 2000;

    // verify the navbar stuff (inside reviewMainLayout)
    client
      .url("http://localhost:3000/Workbench")
      .resizeWindow(1024, 768).pause(2000)
      .reviewMainLayout()
    ;

    // verify error message when we make screen smaller
    client
      .url("http://localhost:3000/Workbench")
      .waitForElementVisible("#viewport-big-enough")
      .verify.visible("#viewport-big-enough")
      .verify.hidden("#viewport-too-small")
      .resizeWindow(700, 500)
      .waitForElementVisible("#viewport-too-small", 5000)
      .verify.hidden("#viewport-big-enough")
      .verify.visible("#viewport-too-small")
      .verify.containsText("#viewport-too-small .jumbotron > h1", "Are you on a phone?")
      .verify.containsText("#viewport-too-small .jumbotron > p:nth-child(2)",
          "If you're on a laptop or desktop, please make your window wider. " +
          "Currently Workbench has been designed to work on large screens (wider than 768px).")
      .verify.containsText("#viewport-too-small .jumbotron > p:nth-child(3)",
          "If you want to use Workbench on smaller devices, " +
          "please email a feature request to the MedBook team.")
      .verify.attributeContains("#viewport-too-small .jumbotron > p:nth-child(4) > a",
          "href", "mailto:mokolodi1@gmail.com")
      .resizeWindow(1024, 768)
      .waitForElementVisible("#viewport-big-enough", 5000)
    ;

    // make sure we get an error message that we need to log in
    client
      .verify.elementPresent("#viewport-big-enough .jumbotron")
      .verify.containsText("#viewport-big-enough .jumbotron > h1", "You're not logged in!")
      .verify.containsText("#viewport-big-enough .jumbotron > p", "Please log in to continue")
    ;

    // make sure user exists and log in
    client
      .createTestingUser()
      .signIn("testing@medbook.ucsc.edu", "testing")
      .reviewMainLayout() // check navbar stuff again
    ;

    // remove testing data
    // check to see that testing data has "No data" in '#data'
    client
      .url("http://localhost:3000/Workbench/testing/removeData")
      .waitForElementVisible("#done", 5000)
    ;

    var firstJobSuccess = "#affix-job-output .col-sm-4 .list-group > .list-group-item-success:nth-child(1)";

    // check out the welcome page, make sure links there work
    client
      .url("http://localhost:3000/Workbench/")
      .waitForElementVisible("#logged-in")
      .verify.containsText("#logged-in .jumbotron > h1", "Welcome!")
      .verify.containsText("#logged-in .jumbotron > p:nth-child(2)",
          "Workbench is your one-stop shop for online bioinformatic tools.")
      .verify.containsText("#logged-in > .jumbotron > p:nth-child(3)",
          "Using the tools listed in the toolbar at the top, " +
          "you can run several bioinformatic tools with the touch of a button.")
      .verify.containsText("#logged-in .jumbotron > p:nth-child(4)",
          "Workbench is currently under active development, " +
          "and you may encounter bugs using it. " +
          "Please report these bugs to the MedBook team " +
          "by emailing Teo Fleming at mokolodi1@gmail.com.")
      .verify.attributeContains("#logged-in .jumbotron > p:nth-child(4) > a",
          "href", "mailto:mokolodi1@gmail.com")
      .verify.containsText("#logged-in .jumbotron > p:nth-child(5) > a:nth-child(1)",
          "Got it!")
      .verify.containsText("#logged-in .jumbotron > p:nth-child(5) > #close-welcome-forever",
          "Don't show again")
      // click on "Got it!" button, make sure we get to the right place
      .click("#logged-in .jumbotron > p:nth-child(5) > a:nth-child(1)")
      .pause(500)
      .verify.containsText("#workbench-navbar-collapse > ul:nth-child(1) > li.active", "History")
      .verify.containsText("#logged-in > h1", "History of previously run tools")
      .verify.containsText("#logged-in > h1 > small", "of previously run tools")
      // go back to the welcome page, make sure the "Don't show again" button works
      .url("http://localhost:3000/Workbench/")
      .waitForElementVisible("#logged-in")
      .click("#close-welcome-forever")
      // ensure redirected to history
      .waitForElementVisible("#workbench-navbar-collapse > ul:nth-child(1) > li.active")
      .verify.containsText("#workbench-navbar-collapse > ul:nth-child(1) > li.active", "History")
      // try to go back to webpage, should be redirected to history
      .url("http://localhost:3000/Workbench/")
      .waitForElementVisible("#logged-in")
      .waitForElementVisible("#workbench-navbar-collapse > ul:nth-child(1) > li.active")
      .verify.containsText("#workbench-navbar-collapse > ul:nth-child(1) > li.active", "History")

      // check out the history page if blank
      .verify.containsText("#affix-job-output .jumbotron > h1", "Ready, set, go!")
      .verify.containsText("#affix-job-output .jumbotron > p:nth-child(2)",
          "You're ready to run your first tool! " +
          "The available tools are listed in the toolbar at the top of this page.")
      .verify.containsText("#affix-job-output .jumbotron > p:nth-child(3)",
          "Still don't know where to go?")
      .verify.containsText("#affix-job-output .jumbotron > p:nth-child(4)",
          "Remember to come back to this page to view your previously run tools.")
      // go to the limma tool from the link in the jumbotron
      .click("#affix-job-output .jumbotron > p:nth-child(3) > a")
      .verify.containsText("#workbench-navbar-collapse > ul:nth-child(1) > li.active", "Limma")

      // set options for limma
      .waitForElementVisible("#addLimmaJob select[name=contrast_label]") // subscriptions loaded
      .clearValue("#addLimmaJob input[name=topGeneCount]")
      .setValue("#addLimmaJob input[name=topGeneCount]", 1000)
      .click("#addLimmaJob select[name=contrast_label] > option[value=test_contrast]")
      // two contrasts loaded: only one should show because they share a label
      .verify.elementNotPresent("#addLimmaJob select[name=contrast_label] > option:nth-child(3)")
      // wait for form to show versions also
      .waitForElementVisible("#addLimmaJob select[name=contrast_version]")
      .click("#addLimmaJob select[name=contrast_version] > option[value='1']")
      // two contrasts loaded: should show two versions
      .verify.elementPresent("#addLimmaJob select[name=contrast_version] > option[value='2']")
      .click("#addLimmaJob select[name=correction_method] > option[value=BH]")
      .verify.containsText("#addLimmaJob > fieldset > p:nth-child(6)",
          "BH correction method refers to Benjamini and Hochberg’s method " +
          "to control the false discovery rate.")
      .verify.elementPresent("#addLimmaJob button[type=reset]")
      .click("#addLimmaJob button[type=submit]")
      .waitForElementNotPresent("#addLimmaJob select[name=contrast_version]")
      .verify.value("#addLimmaJob input[name=topGeneCount]", "") // form cleared

      // go to history and check it out
      .click("#workbench-navbar-collapse > ul:nth-child(1) > li:nth-child(1)")
      .waitForElementVisible(firstJobSuccess, 30000)
      .verify.containsText(firstJobSuccess + " > span.badge", "done")
      .verify.containsText(firstJobSuccess + " > h4", "Limma")
      .verify.containsText(firstJobSuccess + " > p", "Date created: a few seconds ago\n" +
          "Top gene count: 1000\n" +
          "Contrast name: test_contrast\n" +
          "Contrast version: 1\n" +
          "Correction method: BH")
    ;

    client.end();
  },
};
