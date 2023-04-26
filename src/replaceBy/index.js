/**
 * @name replaceBy
 * @description Replaces all the occurrences of a string with another string.
 * @param {string} str - _none_ - The string to replace.
 * @param {string} searchReplaceObj - _none_ - The object containing the search and replace strings.
 * @returns {string} - The replaced string.
 * @throws {Error} - Throws an error if the input is not a string or search replace object is not shared.
 * @example replaceBy("{{{Hello World}}}", { "Hello": "Hi", "World": "Earth" }); // Returns "Hi Earth"
 * @example replaceBy("{{{Hello World}}}", { "Hello": "Hi" }); // Returns "Hi World"
 * @example replaceBy("{{{Hello World}}}", { "Hello": "Hi", "World": "Earth", "Earth": "World" }); // Returns "Hi World"
 */

function replaceBy(str, searchReplaceObj) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (typeof searchReplaceObj !== "object") {
    throw new Error("Invalid object served");
  }

  for (let key in searchReplaceObj) {
    str = str.replace(`{{{${key}}}}`, searchReplaceObj[key]);
  }

  return str;
}

module.exports = replaceBy;
