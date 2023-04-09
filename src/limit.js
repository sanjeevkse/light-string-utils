const length = require("./length");

function limit(str, strLimit, padSide = "right", padString = "...") {
  // Check for input types
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (typeof strLimit !== "number") {
    throw new Error("Invalid limit served");
  }

  // Convert padString to string
  if (typeof padString !== "string") {
    padString = String(padString);
  }

  let strLength = length(str);

  if (strLength > strLimit) {
    if (padSide === "left") {
      return padString + str.slice(0, strLimit);
    } else {
      return str.slice(0, strLimit) + padString;
    }
  }

  return "";
}

module.exports = limit;
