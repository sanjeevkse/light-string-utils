function center(str, totalStringLength, paddingCharacter = " ") {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (!str || !totalStringLength || totalStringLength < str.length) {
    return str;
  }

  const paddingLength = totalStringLength - str.length;
  const leftPaddingLength = Math.floor(paddingLength / 2);
  const rightPaddingLength = paddingLength - leftPaddingLength;

  return (
    paddingCharacter.repeat(leftPaddingLength) +
    str +
    paddingCharacter.repeat(rightPaddingLength)
  );
}

module.exports = center;
