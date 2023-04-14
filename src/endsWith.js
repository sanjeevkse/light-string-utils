function endsWith(str, compareSubString) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str.length === 0) {
    return false;
  }

  const idx = str.lastIndexOf(compareSubString);

  return idx !== -1 && idx === str.length - compareSubString.length;
}

module.exports = endsWith;
