const abbreviate = require("./index");

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
