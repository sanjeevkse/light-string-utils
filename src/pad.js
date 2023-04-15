/**
 * @name pad
 * @description Pads a string with another string.
 * @param {string} str - _none_ - The string to pad.
 * @param {string} side - _none_ - The side to pad the string (left | right | both).
 * @param {string} padWith - _none_ - The string to pad the string with.
 * @returns {string} - The padded string.
 * @throws {Error} - Throws an error if the input is not a string.
 * @example pad("Hello World", "left", "!!!"); // Returns "!!!Hello World"
 * @example pad("Hello World", "right", "!!!"); // Returns "Hello World!!!"
 * @example pad("Hello World", "both", "!!!"); // Returns "!!!Hello World!!!"
 * @example pad("Hello World", "both"); // Returns "Hello World"
 */

function pad(str, side, padWith) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (["left", "right", "both"].indexOf(side) === -1) {
    throw new Error("Invalid side served");
  }

  if (typeof padWith === "undefined") {
    return str;
  }

  if (side === "left") {
    return padWith + str;
  }

  if (side === "right") {
    return str + padWith;
  }

  if (side === "both") {
    return padWith + str + padWith;
  }

  return str;
}

module.exports = pad;
