'use strict';

require('./helper.js');

var basic = require('./examples/basic.json');

var JSONMath = require('./../index');

describe('Basic', function () {

	describe('should always start with no variables', function () {

		it('should return an empty object if no operations are applied', function () {

			var math = new JSONMath();

			var result = math.execute({});

			assert.deepEqual(result, {});

		});

		it('should return an empty object if no operations are applied - part 2', function () {

			var math = new JSONMath();

			var result = math.execute([]);

			assert.deepEqual(result, {});

		});

	});

	describe('it doing basic maths', function () {

		it('should be able to do + - * /', function () {

			var math = new JSONMath();

			var result = math.execute(basic);

			assert.deepEqual(result, {a: 4, b: 4, c: 4, d: 4});

		});

	});

});
