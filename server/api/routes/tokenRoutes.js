"use strict";
module.exports = function(app) {
  var token = require("../controllers/tokenController");

  app.route("/tokens").post(token.create_a_token);

  app.route("/tokens/:tokenId").get(token.read_a_token);
};
