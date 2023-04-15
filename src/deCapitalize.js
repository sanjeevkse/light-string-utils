/**
 *
 * @name deCapitalize
 * @description De-capitalizes the first letter of a string.
 * @param {string} str - _none_ - The string to de-capitalize align.
 * @throws {Error} - If an invalid string is served.
 * @returns {string} - A new string with the first letter de-capitalized.
 * @example deCapitalize("Hello World"); // Returns "hello World"
 * @example deCapitalize(" "); // Returns ""
 * @example deCapitalize("test"); // Returns "test"
 */

function deCapitalize(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str.length === 0) {
    return "";
  }

  str = str.trim();

  if (str.length === 1) {
    return str.toLowerCase();
  }

  return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = deCapitalize;
