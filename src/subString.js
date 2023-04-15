/**
 * @name subString
 * @description Returns a substring of a string.
 * @param {string} str - _none_ - The string to get the substring from.
 * @param {number} start - 0 - The index to start the substring from.
 * @param {number} countFromStart - undefined - The number of characters to return.
 * @returns {string} - The substring of the string.
 * @throws {Error} - Throws an error if the input is not a string.
 * @example subString("Hello World"); // Returns "Hello World"
 * @example subString(" "); // Returns " "
 * @example subString("Hello World", 2); // Returns "llo World"
 * @example subString("Hello World", 2, 3); // Returns "llo"
 */

const length = require("./length");

function subString(str, start = 0, countFromStart = undefined) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (typeof start !== "number") {
    start = parseInt(start, 10);
  }

  let strLength = length(str);

  if (strLength <= start) {
    return "";
  }

  if (start < 0) {
    return "";
  }

  if (typeof countFromStart === "undefined") {
    countFromStart = strLength - start;
  }

  let end = start + countFromStart;

  return str.slice(start, end);
}

module.exports = subString;
