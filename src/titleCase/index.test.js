// file: titleCase.test.js
const titleCase = require("./index");

test("should throw an error if input is not a string", () => {
  expect(() => {
    titleCase(12);
  }).toThrow();
});

test("should return empty string if input is empty string", () => {
  expect(titleCase("")).toBe("");
});

test("should return the same string if input is a single character", () => {
  expect(titleCase("a")).toBe("A");
});

test("should return the same string if input is all uppercase", () => {
  expect(titleCase("HELLO WORLD")).toBe("Hello World");
});

test("should return the same string if input is all lowercase", () => {
  expect(titleCase("hello world")).toBe("Hello World");
});

test("should return a properly cased string if input is a mixed case string", () => {
  expect(titleCase("hElLo WoRlD")).toBe("Hello World");
});
