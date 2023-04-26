// file: deCapitalize.test.js
const deCapitalize = require("./index");

//Invalid input
test("throws an error if invalid input is served", () => {
  expect(() => {
    deCapitalize(12);
  }).toThrow();
});

//Empty string
test("returns an empty string if an empty string is served", () => {
  expect(deCapitalize("")).toBe("");
});

//One letter string
test("returns the same string if it is one letter long", () => {
  expect(deCapitalize("a")).toBe("a");
});

//String with spaces
test("returns the same string if it is only spaces", () => {
  expect(deCapitalize(" ")).toBe("");
});

//Normal string
test("returns a new string with the first letter de-capitalized", () => {
  expect(deCapitalize("Hello World")).toBe("hello World");
});
