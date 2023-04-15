function isAlpha(str) {
  if (!str) return false;
  return /^[a-zA-Z]+$/.test(str);
}

module.exports = isAlpha;
