const wordCount = require("./index");

describe("function wordCount", () => {
  test("`Mango Seasion` should be `2`", () => {
    expect(wordCount("Mango Seasion")).toEqual(2);
  });
  test("`Sri Ganesha` should be `2`", () => {
    expect(wordCount("Sri Ganesha", " ")).toEqual(2);
  });
  test("Number `1` string should throw an error `string`", () => {
    expect(() => {
      wordCount(1);
    }).toThrow("string");
  });
});
