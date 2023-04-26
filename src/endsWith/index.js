/**
 *
 * @name endsWith
 * @description Checks if a string ends with the specified substring.
 * @param {string} str - _none_ - The string to center align.
 * @param {string} compareSubString - _none_ - The substring to compare.
 * @throws {Error} - If an invalid string is served.
 * @returns {boolean} - A boolean indicating if the string ends with the specified substring.
 * @example endsWith("Hello World", "World"); // Returns true
 * @example endsWith("Hello World", "Worlds"); // Returns false
 * @example endsWith("Hello World", " "); // Returns false
 * @example endsWith("Hello World", "Hello World"); // Returns true
 */

function endsWith(str, compareSubString) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str.length === 0) {
    return false;
  }

  const idx = str.lastIndexOf(compareSubString);

  return idx !== -1 && idx === str.length - compareSubString.length;
}

module.exports = endsWith;
