/**

@name abbreviate
@description Abbreviates a string by returning the first character of each word.
@param {string} str - _none_ - The input string to be abbreviated.
@returns {string} - The abbreviated string.
@throws {Error} - Throws an error if the input is not a string.
@example abbreviate("Hello World"); // Returns "HW"
@example abbreviate(" "); // Returns ""
@example abbreviate("test"); // Returns "t"
*/

function abbreviate(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  str = str.trim();

  if (str === "") {
    return "";
  }

  let words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    result += words[i][0];
  }

  return result;
}

module.exports = abbreviate;
