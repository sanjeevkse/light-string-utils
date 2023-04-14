function equalsIgnoreCase(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("Invalid string served");
  }

  return str1.toLowerCase() === str2.toLowerCase();
}

module.exports = equalsIgnoreCase;
