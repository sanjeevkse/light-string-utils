/**
 * @name last
 * @description Returns the last character of a string.
 * @param {string} str - _none_ - The string to get the last character from.
 * @param {number} characterCount - 1 - The number of characters to return.
 * @returns {string} - The last character of the string.
 * @throws {Error} - Throws an error if the input is not a string.
 * @example last("Hello World"); // Returns "d"
 * @example last(" "); // Returns ""
 * @example last("test"); // Returns "t"
 * @example last("Hello World", 2); // Returns "ld"
 */

function last(str, characterCount = 1) {
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
    return str.charAt(str.length - 1);
  }

  return str.slice(str.length - characterCount);
}

module.exports = last;
