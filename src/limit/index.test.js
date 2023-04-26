const limit = require("./index");

describe("function limit", () => {
  test("`Mango` should suffixed with ... in limit of 3", () => {
    expect(limit("Mango", 3)).toBe("Man...");
  });
  test("`Mango` should prefixed with ... in limit of 3", () => {
    expect(limit("Mango", 3, "left")).toBe("...Man");
  });
  test("`Mango` should prefixed with #@ in limit of 3", () => {
    expect(limit("Mango", 3, "right", "#@")).toBe("Man#@");
  });
  test("Number `1` string should throw an error `string`", () => {
    expect(() => {
      limit(1);
    }).toThrow("string");
  });
  test("String limit should throw an error `limit`", () => {
    expect(() => {
      limit("Pineapple", "10");
    }).toThrow("limit");
  });
  test("No string of `padString` should be converted to string and continue the execution", () => {
    expect(limit("Mango", 4, "right", 1)).toBe("Mang1");
  });
  test("length < limit", () => {
    expect(limit("Mango", 40, "right", "...")).toBe("");
  });
});
