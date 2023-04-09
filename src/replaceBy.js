function replaceBy(str, searchReplaceObj) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (typeof searchReplaceObj !== "object") {
    throw new Error("Invalid object served");
  }

  for (let key in searchReplaceObj) {
    str = str.replace(key, searchReplaceObj[key]);
  }

  return str;
}

module.exports = replaceBy;
