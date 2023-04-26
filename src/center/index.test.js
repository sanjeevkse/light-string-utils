const center = require("./index");

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
