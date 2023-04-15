/**
 *
 * @name center
 * @description Center aligns the given string within a new string of the specified length, padded with the specified character.
 * @param {string} str - _none_ - The string to center align.
 * @param {number} totalStringLength - _none_ - The total length of the resulting string.
 * @param {string} paddingCharacter - " " - The character to use for padding. Defaults to a space.
 * @throws {Error} - If an invalid string is served.
 * @returns {string} - A new string of the specified length, with the original string centered and padded.
 * @example center("Hello World", 20); // Returns "    Hello World     "
 * @example center("Hello World", 20, "*"); // Returns "****Hello World*****"
 */

function center(str, totalStringLength, paddingCharacter = " ") {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (!str || !totalStringLength || totalStringLength < str.length) {
    return str;
  }

  const paddingLength = totalStringLength - str.length;
  const leftPaddingLength = Math.floor(paddingLength / 2);
  const rightPaddingLength = paddingLength - leftPaddingLength;

  return (
    paddingCharacter.repeat(leftPaddingLength) +
    str +
    paddingCharacter.repeat(rightPaddingLength)
  );
}

module.exports = center;
