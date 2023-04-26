// file: equalsIgnoreCase.test.js
const equalsIgnoreCase = require("./index");

test("equalsIgnoreCase function", () => {
  expect(equalsIgnoreCase("abc", "ABC")).toBe(true);
  expect(equalsIgnoreCase("abc", "Abc")).toBe(true);
  expect(equalsIgnoreCase("abc", "abC")).toBe(true);
  expect(equalsIgnoreCase("abc", "aBc")).toBe(true);
  expect(equalsIgnoreCase("abc", "abcd")).toBe(false);
  expect(equalsIgnoreCase("abc", "Abcd")).toBe(false);
  expect(equalsIgnoreCase("abc", "AbCd")).toBe(false);
  expect(equalsIgnoreCase("abc", "aBcd")).toBe(false);
  expect(equalsIgnoreCase("abc", "")).toBe(false);
  expect(equalsIgnoreCase("", "")).toBe(true);
  expect(equalsIgnoreCase("", "abc")).toBe(false);
});

test("throws an error when an invalid string is served", () => {
  expect(() => {
    equalsIgnoreCase(1234, "World");
    equalsIgnoreCase(123, "123");
    equalsIgnoreCase("123", 123);
    equalsIgnoreCase(true, "true");
    equalsIgnoreCase("true", true);
    equalsIgnoreCase(false, "false");
    equalsIgnoreCase("false", false);
    equalsIgnoreCase(null, "null");
    equalsIgnoreCase("null", null);
    equalsIgnoreCase(undefined, "undefined");
    equalsIgnoreCase("undefined", undefined);
    equalsIgnoreCase([1, 2, 3], "1,2,3");
  }).toThrow();
});
