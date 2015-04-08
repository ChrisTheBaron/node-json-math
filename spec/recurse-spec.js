'use strict';

require('./helper.js');

var recurse = require('./examples/recurse.json');

var JSONMath = require('./../index');

describe('Recurse it doing recursive maths', function () {

	it('should be able to do + - * / recursively', function () {

		var math = new JSONMath();

		var result = math.execute(recurse);

		assert.deepEqual(result, {a: 12});

	});

});
