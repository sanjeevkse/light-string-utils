/**
 * @name length
 * @description Returns the length of a string.
 * @param {string} str - _none_ - The string to get the length of a string.
 * @returns {number} - The length of the string.
 * @throws {Error} - Throws an error if the input is not a string.
 * @example length("Hello World"); // Returns 11
 * @example length(" "); // Returns 1
 * @example length("test"); // Returns 4
 */

function length(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid str served");
  }

  return str.length;
}

module.exports = length;
