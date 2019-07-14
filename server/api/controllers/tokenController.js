"use strict";

var mongoose = require("mongoose"),
  Token = mongoose.model("Tokens");

exports.create_a_Token = function(req, res) {
  var new_Token = new Token(req.body);
  new_Token.save(function(err, Token) {
    if (err) res.send(err);
    res.json(Token);
  });
};

exports.read_a_Token = function(req, res) {
  Token.findById(req.params.TokenId, function(err, Token) {
    if (err) res.send(err);
    res.json(Token);
  });
};
