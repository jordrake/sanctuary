'use strict';

var jsc = require('jsverify');
var Z = require('sanctuary-type-classes');

var S = require('../../..');

var append_ = require('../append_');


function associativity(f, u) {
  var lhs = S.reduce_(f, 0, u);
  var rhs = S.reduce_(f, 0, S.reduce_(append_, [], u));
  return Z.equals(lhs, rhs);
}

exports.associativity = function(f, u) {
  test('Foldable associativity', function() {
    jsc.assert(jsc.forall(f, u, associativity));
  });
};