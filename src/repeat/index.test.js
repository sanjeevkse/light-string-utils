const repeat = require("./index");

describe("repeat()", () => {
  test("Test that the function throws an error if an invalid input is provided", () => {
    expect(() => repeat(null)).toThrow(Error);
    expect(() => repeat(undefined)).toThrow(Error);
  });

  test("Test that the function correctly repeats a single word", () => {
    expect(repeat("test")).toBe("test");
    expect(repeat("testing", 2)).toBe("testingtesting");
    expect(repeat("testing", 2, " ")).toBe("testing testing");
  });
});
