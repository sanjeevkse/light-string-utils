// file: escapeHTML.test.js
const escapeHTML = require("./index");

// Test that the function returns a string
test("escapeHTML returns a string", () => {
  expect(typeof escapeHTML("test")).toBe("string");
});

// Test that the function escapes &
test("escapeHTML escapes &", () => {
  expect(escapeHTML("&")).toBe("&amp;");
});

// Test that the function escapes <
test("escapeHTML escapes <", () => {
  expect(escapeHTML("<")).toBe("&lt;");
});

// Test that the function escapes >
test("escapeHTML escapes >", () => {
  expect(escapeHTML(">")).toBe("&gt;");
});

// Test that the function escapes "
test('escapeHTML escapes "', () => {
  expect(escapeHTML('"')).toBe("&quot;");
});

// Test that the function escapes '
test("escapeHTML escapes '", () => {
  expect(escapeHTML("'")).toBe("&#x27;");
});

// Test that the function escapes `
test("escapeHTML escapes `", () => {
  expect(escapeHTML("`")).toBe("&#x60;");
});

// Test that the function throws an error when given invalid input
test("escapeHTML throws an error when given invalid input", () => {
  expect(() => {
    escapeHTML(5);
  }).toThrow();
});
