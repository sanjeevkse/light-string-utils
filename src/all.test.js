const length = require("./length");
const limit = require("./limit");
const toArray = require("./toArray");
const subString = require("./subString");

describe("function length", () => {
  test("`Mango` length should be `5`", () => {
    expect(length("Mango")).toBe(5);
  });

  test("`Mango` length should not be 8", () => {
    expect(length("Mango")).not.toBe(8);
  });

  test("Number `1` length should throw an error `string`", () => {
    expect(() => {
      length(1);
    }).toThrow();
  });
});

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
