/**
 *
 * @name equalsIgnoreCase
 * @description Checks if two strings are equal ignoring the case.
 * @param {string} str1 - _none_ - The first string to compare.
 * @param {string} str2 - _none_ - The second string to compare.
 * @throws {Error} - If an invalid string is served.
 * @returns {boolean} - A boolean indicating if the strings are equal ignoring the case.
 * @example equalsIgnoreCase("Hello World", "hello world"); // Returns true
 * @example equalsIgnoreCase("Hello World", "hello worlds"); // Returns false
 * @example equalsIgnoreCase("Hello World", " "); // Returns false
 * @example equalsIgnoreCase("Hello World", "Hello World"); // Returns true
 */

function equalsIgnoreCase(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("Invalid string served");
  }

  return str1.toLowerCase() === str2.toLowerCase();
}

module.exports = equalsIgnoreCase;
