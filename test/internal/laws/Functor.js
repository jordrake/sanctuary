'use strict';

var jsc = require('jsverify');
var Z = require('sanctuary-type-classes');

var S = require('../../..');


function identity(a) {
  var lhs = Z.map(S.I, a);
  var rhs = a;
  return Z.equals(lhs, rhs);
}

function composition(a, f, g) {
  var lhs = Z.map(function(x) { return f(g(x)); }, a);
  var rhs = Z.map(f, Z.map(g, a));
  return Z.equals(lhs, rhs);
}

exports.identity = function(a) {
  test('Functor identity', function() {
    jsc.assert(jsc.forall(a, identity));
  });
};

exports.composition = function(a, f, g) {
  test('Functor composition', function() {
    jsc.assert(jsc.forall(a, f, g, composition));
  });
};