'use strict';

require('../lib/array-prototype-cutAndPush.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var arrayStrictEqual = function(xs1, xs2, test) {
  if (!Array.isArray(xs1))       {test.fail(xs1+" is not array");}
  if (!Array.isArray(xs2))       {test.fail(xs2+" is not array");}
  if (xs1.length !== xs2.length) {test.fail(xs1+" and "+xs2+" has diferent length");}
  for (var i=0; i<xs1.length; i++) {
    if (xs1[i] !== xs2[i])       {test.fail(xs1+" and "+xs2+" are not equal");}
  }
  test.ok(true, "Array are equal");
};

exports['cutAndPush'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'empty arrays': function(test) {
    test.expect(2);

    var a = [], b = [];
    a.cutAndPush(function() {}, b);
    test.strictEqual(a.length, 0, 'should be empty array.');
    test.strictEqual(b.length, 0, 'should be empty array.');
    test.done();
  },
  'empty first array': function(test) {
    test.expect(3);

    var a = [], b = [1,2,3,4,5];
    a.cutAndPush(function() {}, b);
    test.strictEqual(a.length, 0, 'should be empty array.');
    test.strictEqual(b.length, 5, 'should be empty array.');
    arrayStrictEqual(b, [1,2,3,4,5], test);
    test.done();
  },
  'empty second array': function(test) {
    test.expect(3);

    var a = [1,2,3,4,5], b = [];
    a.cutAndPush(function() {}, b);
    test.strictEqual(a.length, 5, 'should be empty array.');
    test.strictEqual(b.length, 0, 'should be empty array.');
    arrayStrictEqual(a, [1,2,3,4,5], test);
    test.done();
  },
  'cutAndPush two numbers arrays': function(test) {
    test.expect(2);
    var a = [1,2,3,4,5,6,7,8,9,10],
        b = [1,2,3,4,5,6,7,8,9,10];
    a.cutAndPush(function(el) { return el > 5; }, b);
    arrayStrictEqual(a, [1,2,3,4,5], test);
    arrayStrictEqual(b, [1,2,3,4,5,6,7,8,9,10,6,7,8,9,10], test);
    test.done();
  },
  'cutAndPush two alphaBet arrays': function(test) {
    test.expect(2);
    var a = ['a','b','c'],
        b = ['d','e','f'];
    a.cutAndPush(function (el) { return el === 'a'; }, b);
    arrayStrictEqual(a, ['b','c'], test);
    arrayStrictEqual(b, ['d','e','f','a'], test);
    test.done();
  },
};
