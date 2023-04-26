const isAlpha = require("./index");

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
