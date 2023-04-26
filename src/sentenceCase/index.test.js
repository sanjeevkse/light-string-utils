// file: sentenceCase.test.js
const sentenceCase = require("./index");

test("should throw an error if input is not a string", () => {
  expect(() => {
    sentenceCase(12);
  }).toThrow();
});

test("should return the string in sentence case", () => {
  expect(sentenceCase("this is a test string.")).toBe("This is a test string.");
});

test("should return the string in sentence case if it is already in sentence case", () => {
  expect(sentenceCase("This is a test string.")).toBe("This is a test string.");
});

test("should return the string in sentence case if it is already in all caps", () => {
  expect(sentenceCase("THIS IS A TEST STRING.")).toBe("This is a test string.");
});
