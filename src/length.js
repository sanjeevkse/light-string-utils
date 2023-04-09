function length(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid str served");
  }

  return str.length;
}

module.exports = length;
