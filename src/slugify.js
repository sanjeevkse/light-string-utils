function slugify(string) {
  return string
    .trim()
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

module.exports = slugify;
