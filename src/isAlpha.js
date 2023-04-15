/**
 *
 * @name isAlNum
 * @description Checks if the string contains only alphanumeric characters.
 * @param {string} str - _none_ - The string to check.
 * @returns {boolean} - A boolean indicating if the string contains only alphanumeric characters.
 * @example isAlNum("Hello World"); // Returns false
 * @example isAlNum("HelloWorld"); // Returns true
 * @example isAlNum("HelloWorld123"); // Returns true
 * @example isAlNum("Hello World123"); // Returns false
 */

function isAlpha(str) {
  if (!str) return false;
  return /^[a-zA-Z]+$/.test(str);
}

module.exports = isAlpha;
