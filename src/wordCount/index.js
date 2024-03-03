const toArray = require("../toArray");

/**
 * @name worldCount
 * @description Counts the number of words seperated by spaces or the given seperator.
 * @param {string} str - _none_ - The string to convert.
 * @param {string} explodeBy - "" - The separator to use.
 * @returns {number} - The word count.
 * @throws {Error} - Throws an error if the input is not a string.
 * @example worldCount("Hello World", " "); // Returns 2
 * @example wc("test me!"); // Returns 2
 */

function wordCount(str, explodeBy = " ") {
  return toArray(str, explodeBy).length;
}

module.exports = wc = wordCount;
