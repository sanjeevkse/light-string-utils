/**

@name capitalize
@description Capitalizes the first letter of a string and converts the rest to lowercase.
@param {string} str - _none_ - The input string to be capitalized.
@returns {string} - The capitalized string.
@throws {Error} - If the input is not a string.
@example capitalize("hello world"); // returns "Hello world"
@example capitalize("hElLo wOrLD"); // returns "Hello world"
@example capitalize(" A "); // returns "A"
@example capitalize(""); // returns ""
@example capitalize(null); // throws Error "Invalid string served"
@example capitalize(123); // throws Error "Invalid string served"
*/

function capitalize(str) {
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

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = capitalize;
