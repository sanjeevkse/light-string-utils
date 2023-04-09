function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str.length === 0) {
    return "";
  }

  str = str.trim();

  if (str.length === 1) {
    return str.toUpperCase();
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = capitalize;
