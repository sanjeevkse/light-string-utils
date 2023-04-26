// file: endsWith.test.js
const endsWith = require("./index");

// Test if the function returns true when the string ends with the specified substring
test("returns true when the string ends with the specified substring", () => {
  expect(endsWith("Hello World", "World")).toBe(true);
});

// Test if the function returns false when the string does not end with the specified substring
test("returns false when the string does not end with the specified substring", () => {
  expect(endsWith("Hello World", "Worlds")).toBe(false);
});

// Test if the function returns false when the specified substring is not found
test("returns false when the specified substring is not found", () => {
  expect(endsWith("Hello World", " ")).toBe(false);
});

// Test if the function returns true when the string is the same as the specified substring
test("returns true when the string is the same as the specified substring", () => {
  expect(endsWith("Hello World", "Hello World")).toBe(true);
});

// Test if the function throws an error when an invalid string is served
test("throws an error when an invalid string is served", () => {
  expect(() => {
    endsWith(1234, "World");
  }).toThrow();
});
