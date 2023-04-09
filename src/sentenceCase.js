function sentenceCase(str) {
  return str
    .toLowerCase()
    .replace(/(^\w{1})|(\.\s*\w{1})/g, (match) => match.toUpperCase());
}

module.exports = sentenceCase;
