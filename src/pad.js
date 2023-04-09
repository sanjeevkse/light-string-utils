function pad(str, side, padWith) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (["left", "right", "both"].indexOf(side) === -1) {
    throw new Error("Invalid side served");
  }

  if (typeof padWith === "undefined") {
    return str;
  }

  if (side === "left") {
    return padWith + str;
  }

  if (side === "right") {
    return str + padWith;
  }

  if (side === "both") {
    return padWith + str + padWith;
  }

  return str;
}

module.exports = pad;
