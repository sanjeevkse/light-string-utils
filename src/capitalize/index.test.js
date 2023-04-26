// file: capitalize.test.js
const capitalize = require("./index");

// Test Cases:

test("should capitalize the first letter of a string and convert the rest to lowercase", () => {
  expect(capitalize("hello world")).toBe("Hello world");
  expect(capitalize("hElLo wOrLD")).toBe("Hello world");
  expect(capitalize(" A ")).toBe("A");
  expect(capitalize("")).toBe("");
});

test("should throw an error if the input is not a string", () => {
  expect(() => {
    capitalize(null);
  }).toThrow("Invalid string served");
  expect(() => {
    capitalize(123);
  }).toThrow("Invalid string served");
});
