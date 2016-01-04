// tests/header.js
module.exports = {
  "Hello World" : function (client) {
    client
      .url("http://127.0.0.1:10003")
      .waitForElementVisible("body", 1000)
      .assert.title("MedBook")
      .end();
  }
};