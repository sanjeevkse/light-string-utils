const length = require("../src/length");
const limit = require("../src/limit");
const toArray = require("../src/toArray");
const subString = require("../src/subString");
const abbreviate = require("../src/abbreviate");
const center = require("../src/center");
const isAlpha = require("../src/isAlpha");
const isAlNum = require("../src/isAlNum");

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

describe("abbreviate()", () => {
  test("Test that the function returns a string", () => {
    expect(typeof abbreviate("test")).toBe("string");
  });

  test("Test that the function throws an error if an invalid input is provided", () => {
    expect(() => abbreviate(null)).toThrow(Error);
    expect(() => abbreviate(undefined)).toThrow(Error);
    expect(() => abbreviate(123)).toThrow(Error);
  });

  test("Test that the function correctly abbreviates a single word", () => {
    expect(abbreviate("test")).toBe("t");
    expect(abbreviate("testing")).toBe("t");
    expect(abbreviate("testing")).not.toBe("testing");
  });

  test("Test that the function correctly abbreviates multiple words", () => {
    expect(abbreviate("Hello World")).toBe("HW");
    expect(abbreviate("Main theme allowing")).toBe("Mta");
  });

  test("Test that the function correctly handles empty input", () => {
    expect(abbreviate("")).toBe("");
  });

  test("Test that the function correctly handles input with only spaces", () => {
    expect(abbreviate("   ")).toBe("");
  });
});

describe("center()", () => {
  test("Test that the function returns a string", () => {
    expect(typeof center("test")).toBe("string");
  });

  test("Test that the function throws an error if an invalid input is provided", () => {
    expect(() => center(null)).toThrow(Error);
    expect(() => center(undefined)).toThrow(Error);
    expect(() => center(123)).toThrow(Error);
  });

  test("Test that the function correctly centers a single word", () => {
    expect(center("test")).toBe("test");
    expect(center("testing", 20, "@@")).toBe(
      "@@@@@@@@@@@@testing@@@@@@@@@@@@@@"
    );
    expect(center("testing", 10)).toBe(" testing  ");
  });

  test("Test that the function correctly handles empty input", () => {
    expect(center("")).toBe("");
  });

  test("Test that the function correctly handles input with only spaces", () => {
    expect(center("   ")).toBe("   ");
  });
});

describe("isAlpha()", () => {
  test("Test that the function returns a boolean", () => {
    expect(typeof isAlpha("test")).toBe("boolean");
  });

  test("Test that the function false for an invalid input is provided", () => {
    expect(isAlpha(null)).toBe(false);
    expect(isAlpha(undefined)).toBe(false);
    expect(isAlpha(123)).toBe(false);
  });

  test("Test that the function correctly identifies alphabetic strings", () => {
    expect(isAlpha("test")).toBe(true);
    expect(isAlpha("test123")).toBe(false);
    expect(isAlpha("123")).toBe(false);
  });

  test("Test that the function correctly identifies non-alphabetic strings", () => {
    expect(isAlpha("test!")).toBe(false);
    expect(isAlpha("test123!")).toBe(false);
    expect(isAlpha("123!")).toBe(false);
  });

  test("Test that the function correctly handles empty input", () => {
    expect(isAlpha("")).toBe(false);
  });

  test("Test that the function correctly handles input with only spaces", () => {
    expect(isAlpha("   ")).toBe(false);
  });

  test("Test that the function correctly handles input with only numbers", () => {
    expect(isAlpha("123")).toBe(false);
  });

  test("Test that the function correctly handles input with only special characters", () => {
    expect(isAlpha("!@#$%^&*()_+")).toBe(false);
  });
});

describe("isAlNum()", () => {
  test("Test that the function returns a boolean", () => {
    expect(typeof isAlNum("test")).toBe("boolean");
  });

  test("Test that the function for invalid input is provided", () => {
    expect(isAlNum(null)).toBe(false);
    expect(isAlNum(undefined)).toBe(false);
  });

  test("Test that the function correctly identifies alphanumeric strings", () => {
    expect(isAlNum("test")).toBe(true);
    expect(isAlNum("test123")).toBe(true);
    expect(isAlNum("123")).toBe(true);
    expect(isAlNum(123)).toBe(true);
  });

  test("Test that the function correctly identifies non-alphanumeric strings", () => {
    expect(isAlNum("test!")).toBe(false);
    expect(isAlNum("test123!")).toBe(false);
    expect(isAlNum("123!")).toBe(false);
  });

  test("Test that the function correctly handles empty input", () => {
    expect(isAlNum("")).toBe(false);
  });

  test("Test that the function correctly handles input with only spaces", () => {
    expect(isAlNum("   ")).toBe(false);
  });
});
