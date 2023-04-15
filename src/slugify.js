/**
 * @name slugify
 * @description Converts a string to a slug.
 * @param {string} str - _none_ - The string to convert.
 * @returns {string} - The converted string.
 * @example slugify("Hello World"); // Returns "hello-world"
 * @example slugify("Hello World!"); // Returns "hello-world"
 * @example slugify("Hello World!@#$%^&*()"); // Returns "hello-world"
 */

function slugify(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

module.exports = slugify;
