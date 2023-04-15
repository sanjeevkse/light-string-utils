/**
 *
 * @name first
 * @description Returns the first character of a string.
 * @param {string} str - _none_ - The string to get the first character from.
 * @param {number} characterCount - 1 - The number of characters to return.
 * @returns {string} - The first character of the string.
 * @throws {Error} - Throws an error if the input is not a string.
 * @example first("Hello World"); // Returns "H"
 * @example first(" "); // Returns ""
 * @example first("test"); // Returns "t"
 * @example first("Hello World", 2); // Returns "He"
 */

function first(str, characterCount = 1) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str.length === 0) {
    return "";
  }

  if (characterCount < 0) {
    throw new Error("Invalid character count");
  }

  if (characterCount === 0) {
    return "";
  }

  if (characterCount === 1) {
    return str.charAt(0);
  }

  return str.slice(0, characterCount);
}

module.exports = first;
