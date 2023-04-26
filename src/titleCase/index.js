/**
 * @name titleCase
 * @description Converts a string to title case.
 * @param {string} str - _none_ - The string to convert.
 * @returns {string} - The converted string.
 * @example titleCase("hello world"); // Returns "Hello World"
 * @example titleCase("hello world!@#$%^&*()"); // Returns "Hello World!@#$%^&*()"
 */

function titleCase(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str.length === 0) {
    return "";
  }

  str = str.trim();

  if (str.length === 1) {
    return str.toUpperCase();
  }

  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

module.exports = titleCase;
