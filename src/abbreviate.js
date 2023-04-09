function abbreviate(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid string served");
  }

  if (str === "") {
    return "";
  }

  str = str.trim();

  let words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    result += words[i][0];
  }

  return result;
}

module.exports = abbreviate;
