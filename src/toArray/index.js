/**
 * @name toArray
 * @description Converts a string to an array.
 * @param {string} str - _none_ - The string to convert.
 * @param {string} explodeBy - "" - The separator to use.
 * @returns {string[]} - The converted string.
 * @throws {Error} - Throws an error if the input is not a string.
 * @example toArray("Hello World", " "); // Returns ["Hello", "World"]
 * @example toArray("test"); // Returns ["t", "e", "s", "t"]
 */

function toArray(str, explodeBy = "") {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  return str.split(explodeBy);
}

module.exports = toArray;
