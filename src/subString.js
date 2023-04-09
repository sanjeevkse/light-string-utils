const length = require("./length");

function subString(str, start = 0, countFromStart) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (typeof start !== "number") {
    start = parseInt(start, 10);
  }

  let strLength = length(str);

  if (strLength <= start) {
    return "";
  }

  if (start < 0) {
    return "";
  }

  if (typeof countFromStart === "undefined") {
    countFromStart = strLength - start;
  }

  let end = start + countFromStart;

  return str.slice(start, end);
}

module.exports = subString;
