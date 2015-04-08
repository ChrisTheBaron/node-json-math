'use strict';

require('./helper.js');

var variables = require('./examples/variables.json');

var JSONMath = require('./../index');

describe('Recurse it doing variable maths', function () {

	it('should be able to do + - * / with variables', function () {

		var math = new JSONMath();

		var result = math.execute(variables);

		assert.deepEqual(result, {a: 3, b: 4, c: 7});

	});

});
