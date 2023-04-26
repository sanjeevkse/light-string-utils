/**
 * @name escapeHTML
 * @description Escapes HTML characters.
 * @param {string} str - _none_ - The string to escape.
 * @returns {string} - The escaped string.
 * @throws {Error} - Throws an error if the input is not a string.
 * @example escapeHTML("<p>hello world</p>"); // returns "&lt;p&gt;hello world&lt;/p&gt;"
 * @example escapeHTML("hello world"); // returns "hello world"
 * @example escapeHTML("hello & world"); // returns "hello &amp; world"
 * @example escapeHTML("hello < world"); // returns "hello &lt; world"
 */

function escapeHTML(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  escapeHTML.replacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
  };

  return str.replace(/[&<>"'`]/g, function (m) {
    return escapeHTML.replacements[m];
  });
}

module.exports = escapeHTML;
