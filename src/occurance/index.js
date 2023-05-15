/**

@name occurance
@description Returns the indices of the finding string in the input string.
@param {string} str - _none_ - The input string (target string).
@param {string} findStr - _none_ - The finding string.
@param {string} caseSensitive - false - Should it be case sensitive or in-sensitive.
@returns {number[]} - The starting indices of the occurances.
@throws {Error} - Throws an error if the inputs are invalid.
@example occurance("Hello World!!, Hello all", "Hellow"); // Returns []
@example occurance("You are great as usual", " "); // Returns [3, 7, 13, 16]
@example occurance("Contributing to the open source encourages mutual side benefits"); // Returns [3, 8, 13, 16, 45, 61]
*/

function occurance(str, findStr, caseSensitive = false) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }
  if (typeof findStr !== "string") {
    throw new Error("Invalid findStr served");
  }

  if (str === "") {
    return [];
  }

  if (findStr === "") {
    return [];
  }

  // switch for case sensitivity
  if (!caseSensitive) {
    str = str.toLowerCase();
    findStr = findStr.toLowerCase();
  }

  const result = [];
  let index = str.indexOf(findStr);

  while (index !== -1) {
    result.push(index);
    index = str.indexOf(findStr, index + 1);
  }

  return result;
}

module.exports = occurance;
