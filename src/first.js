function first(str, characterCount = 1) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str.length === 0) {
    return "";
  }

  if (characterCount < 0) {
    throw new Error("Invalid character count");
  }

  if (characterCount === 0) {
    return "";
  }

  if (characterCount === 1) {
    return str.charAt(0);
  }

  return str.slice(0, characterCount);
}

module.exports = first;
