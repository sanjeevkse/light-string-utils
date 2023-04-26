/**
 * @name sentenceCase
 * @description Converts a string to sentence case.
 * @param {string} str - _none_ - The string to convert.
 * @returns {string} - The converted string.
 * @example sentenceCase("hello world"); // Returns "Hello world"
 * @example sentenceCase("hello world."); // Returns "Hello world."
 */

function sentenceCase(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  return str
    .toLowerCase()
    .replace(/(^\w{1})|(\.\s*\w{1})/g, (match) => match.toUpperCase());
}

module.exports = sentenceCase;
