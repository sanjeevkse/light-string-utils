/**
 * @name limit
 * @description Limits the length of a string.
 * @param {string} str - _none_ - The string to limit.
 * @param {number} strLimit - _none_ - The limit of the string.
 * @param {string} padSide - "right" - The side to pad the string.
 * @param {string} padString - "..." - The string to pad the string with.
 * @returns {string} - The limited string.
 * @throws {Error} - Throws an error if the input is not a string.
 * @example limit("Hello World", 5); // Returns "Hello..."
 * @example limit("Hello World", 4, "left"); // Returns "...Hello "
 * @example limit("Hello World", 4, "left", "!!!"); // Returns "!!!Hello"
 */

const length = require("./length");

function limit(str, strLimit, padSide = "right", padString = "...") {
  // Check for input types
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (typeof strLimit !== "number") {
    throw new Error("Invalid limit served");
  }

  // Convert padString to string
  if (typeof padString !== "string") {
    padString = String(padString);
  }

  let strLength = length(str);

  if (strLength > strLimit) {
    if (padSide === "left") {
      return padString + str.slice(0, strLimit);
    } else {
      return str.slice(0, strLimit) + padString;
    }
  }

  return "";
}

module.exports = limit;
