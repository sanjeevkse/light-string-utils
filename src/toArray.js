function toArray(str, explodeBy = "") {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  return str.split(explodeBy);
}

module.exports = toArray;
