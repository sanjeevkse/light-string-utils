function deCapitalize(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str.length === 0) {
    return "";
  }

  str = str.trim();

  if (str.length === 1) {
    return str.toLowerCase();
  }

  return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = deCapitalize;
