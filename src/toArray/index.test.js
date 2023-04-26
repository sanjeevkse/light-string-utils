const toArray = require("./index");

describe("function toArray", () => {
  test("`Mango` should be `['M','a','n','g','o']`", () => {
    expect(toArray("Mango")).toEqual(["M", "a", "n", "g", "o"]);
  });
  test("`Man/go` should be `['Man','go']` for slash", () => {
    expect(toArray("Man/go", "/")).toEqual(["Man", "go"]);
  });
  test("Number `1` string should throw an error `string`", () => {
    expect(() => {
      toArray(1);
    }).toThrow("string");
  });
});
