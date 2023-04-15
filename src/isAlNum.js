function isAlNum(str) {
  if (!str) return false;
  return /^[a-zA-Z0-9]+$/.test(str);
}

module.exports = isAlNum;
