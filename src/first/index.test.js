// file: first.test.js
const first = require("./index");

test("should return the first character of the string", () => {
  expect(first("abc")).toBe("a");
});

test("should return the first two characters of the string", () => {
  expect(first("abc", 2)).toBe("ab");
});

test("should return an empty string if the character count is 0", () => {
  expect(first("abc", 0)).toBe("");
});

test("should return an empty string if the string is empty", () => {
  expect(first("")).toBe("");
});

test("should throw an error if the character count is negative", () => {
  expect(() => {
    first("abc", -1);
  }).toThrow();
});

test("should throw an error if the string is not a string", () => {
  expect(() => {
    first(1);
  }).toThrow();
});
