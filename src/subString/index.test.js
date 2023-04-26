const subString = require("./index");

describe("function subString", () => {
  test("`WriteTestingScirpts` with 10,2 should be `ng`", () => {
    expect(subString("WriteTestingScirpts", 10, 2)).toBe("ng");
  });
  test("`Write Testing Scirpts` with 10,4 should be `ing `", () => {
    expect(subString("Write Testing Scirpts", 10, 4)).toBe("ing ");
  });
  test("Number `1` string should throw an error `string`", () => {
    expect(() => {
      subString(1);
    }).toThrow("string");
  });
  test("`start` is not a number convert it to contiue", () => {
    expect(subString("Write Testing Scirpts", "10a", 4)).toBe("ing ");
  });
  test("strLength <= start", () => {
    expect(subString("Write Testing Scirpts", 100, 4)).toBe("");
  });
  test("start < 0", () => {
    expect(subString("Write Testing Scirpts", -1, 4)).toBe("");
  });
  test("start < 0", () => {
    expect(subString("Write Testing Scirpts", 10)).toBe("ing Scirpts");
  });
});
