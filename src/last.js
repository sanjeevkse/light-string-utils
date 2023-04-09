function last(str, characterCount = 1) {
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
    return str.charAt(str.length - 1);
  }

  return str.slice(str.length - characterCount);
}

module.exports = last;
