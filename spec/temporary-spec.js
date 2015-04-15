'use strict';

require('./helper.js');

var variables = require('./examples/temporary.json');

var JSONMath = require('./../index');

describe('Recurse it doing maths with temporary variables', function () {

	it('should be able to do + - * / with temporary variables', function () {

		var math = new JSONMath();

		var result = math.execute(variables, {a: 1, b: 2});

		assert.deepEqual(result, {c: 3});

	});

});
