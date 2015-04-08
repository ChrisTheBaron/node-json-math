'use strict';

/*
 * Put requires here
 */

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

  switch (typeof operations) {

    case "Array":
      return this._executeArray(operations);
      break;
    case "Object":
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

  return this.variables;

};
