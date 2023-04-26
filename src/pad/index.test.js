// file: pad.test.js
const pad = require("./index");

test("should pad a string on the left", () => {
  expect(pad("foo", "left")).toBe("foo");
  expect(pad("foo", "left", "bar")).toBe("barfoo");
  expect(pad("foo", "left", 1)).toBe("1foo");
  expect(pad("foo", "left", true)).toBe("truefoo");
});

test("should pad a string on the right", () => {
  expect(pad("foo", "right")).toBe("foo");
  expect(pad("foo", "right", "bar")).toBe("foobar");
  expect(pad("foo", "right", 1)).toBe("foo1");
  expect(pad("foo", "right", true)).toBe("footrue");
});

test("should pad a string on both sides", () => {
  expect(pad("foo", "both")).toBe("foo");
  expect(pad("foo", "both", "bar")).toBe("barfoobar");
  expect(pad("foo", "both", 1)).toBe("1foo1");
  expect(pad("foo", "both", true)).toBe("truefootrue");
});

test("should not pad if padWith is undefined", () => {
  expect(pad("foo", "left", undefined)).toBe("foo");
  expect(pad("foo", "right", undefined)).toBe("foo");
  expect(pad("foo", "both", undefined)).toBe("foo");
});

test("should throw if side is invalid", () => {
  expect(() => pad("foo", "middle")).toThrow();
  expect(() => pad("foo", "m")).toThrow();
  expect(() => pad("foo", "")).toThrow();
  expect(() => pad("foo", 1)).toThrow();
  expect(() => pad("foo", true)).toThrow();
  expect(() => pad("foo", {})).toThrow();
  expect(() => pad("foo", [])).toThrow();
  expect(() => pad("foo", () => {})).toThrow();
});
