/**
 *
 * @name isAlpha
 * @description Checks if the string contains only alphanumeric characters.
 * @param {string} str - _none_ - The string to check.
 * @returns {boolean} - A boolean indicating if the string contains only alphanumeric characters.
 * @example isAlpha("Hello World"); // Returns false
 * @example isAlpha("HelloWorld"); // Returns true
 * @example isAlpha("HelloWorld123"); // Returns false
 * @example isAlpha("Hello World123"); // Returns false
 */

function isAlpha(str) {
  if (!str) return false;
  return /^[a-zA-Z]+$/.test(str);
}

module.exports = isAlpha;
