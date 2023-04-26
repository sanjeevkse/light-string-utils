// file: replaceBy.test.js
const replaceBy = require("./index");

// Test cases:

// 1. Check if the function throws an error when the input is not a string

test("replaceBy function throws an error when the input is not a string", () => {
  expect(() => {
    replaceBy(1234, { Hello: "Hi", World: "Earth" });
  }).toThrow();
});

// 2. Check if the function throws an error when the search replace object is not valid

test("replaceBy function throws an error when the search replace object is not valid", () => {
  expect(() => {
    replaceBy("{{{Hello}}} World", "Hello");
  }).toThrow();
});

// 3. Check if the function returns the correct replaced string

test("replaceBy function returns the correct replaced string", () => {
  expect(
    replaceBy("{{{Hello}}} {{{World}}}", {
      Hello: "Hi",
      World: "Earth",
    })
  ).toBe("Hi Earth");
});
