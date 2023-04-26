const isAlNum = require("./index");

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
