'use strict';

/**
 * Constructs a new JSONMath instance with some options
 * @type {Function}
 * @param {{}} options
 * @constructor
 */
var JSONMath = module.exports = function (options) {

	options = options || {};

	this.strict = options.strict || true;

	this.variables = {};

};

/**
 * Executes one or more mathmatical operations on a set of variables
 * @param {Array|Object} operations
 * @returns {Object|null}
 * @throws Error
 */
JSONMath.prototype.execute = function (operations) {

	switch (operations.constructor) {

		case Array:
			return this._executeArray(operations);
			break;
		case Object:
			return this._executeObject(operations);
			break;
		default:
			if (this.strict) {
				throw new Error("Invalid call to JSONMath#execute with: " + JSON.stringify(operations));
			}
			return null;

	}

};

/**
 * Executes a series of operations and then returns the resultant variables
 * @param {Array} operations
 * @returns {{}|null}
 * @private
 */
JSONMath.prototype._executeArray = function (operations) {

	operations.forEach(function (operation) {

		this._executeObject(operation);

	}.bind(this));

	return this.variables;

};

/**
 * Executes a single operation and then returns the resultant variables
 * @param {Object} operation
 * @private
 */
JSONMath.prototype._executeObject = function (operation) {

	/*
	 * Here's where the fancy stuff is going to happen
	 */

	var newVariables = {};

	for (var variable in operation) {
		if (operation.hasOwnProperty(variable)) {

			newVariables[variable] = this._calculate(operation[variable]);

		}
	}

	for (var variable in newVariables) {
		if (newVariables.hasOwnProperty(variable)) {

			this.variables[variable] = newVariables[variable];

		}
	}

	return this.variables;

};

JSONMath.prototype._calculate = function (operation) {

	var func;

	switch (operation.operation) {

		case "+":
			func = function (a, b) {
				return a + b
			};
			break;
		case "-":
			func = function (a, b) {
				return a - b
			}
			break;
		case "*":
			func = function (a, b) {
				return a * b
			}
			break;
		case "/":
			func = function (a, b) {
				return a / b
			}
			break;
		default:
			if (operation.constructor === Number) {
				return operation;
			} else if (operation.constructor === String) {
				return this.variables[operation];
			}
			throw new Error("Invalid operation to perform: " + JSON.stringify(operation));
			break;
	}

	var result = 0;

	for (var i = 0; i < operation.variables.length; i++) {

		if (i == 0) {

			result = operation.variables[i];

			if (result.constructor === Object) {
				result = this._calculate(result);
			} else if (result.constructor === String) {
				result = this.variables[result];
			}

		} else {

			var sec = operation.variables[i];

			if (sec.constructor === Object) {
				sec = this._calculate(sec);
			} else if (sec.constructor === String) {
				sec = this.variables[sec];
			}

			result = func(result, sec);

		}

	}

	return result;

};
