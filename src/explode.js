/**
 *
 *
 * @param {string} str
 * @param {string} by
 * @returns Array of words
 *
 * @note: This function is case sensitive
 */

function explode(str, by = " ") {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str === "") {
    return [];
  }

  let words = str.split(by);
  return words;
}

module.exports = explode;
