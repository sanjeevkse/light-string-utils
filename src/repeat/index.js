/**

@name repeat
@description repeats a string by defined times.
@param {item} item - _none_ - The input string/number to be repeated.
@param {number} times - 1 - The number of times to repeat the string.
@param {string} delimiter - "" - The delimiter to be used between the repeated strings. 
@returns {string} - The repeated string.
@throws {Error} - Throws an error if the input is not a string.
@example repeat("san"); // Returns "san"
@example repeat("san", 4); // Returns "sansansansan"
@example repeat("test ", 2); // Returns "test test"
*/

function repeat(item, times = 1, delimiter = "") {
  if (!item) {
    throw new Error("Invalid string served");
  }

  return new Array(times).fill(item).join(delimiter);
}

module.exports = repeat;
