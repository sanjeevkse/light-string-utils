// file: slugify.test.js
const slugify = require("./index");

test("slugify works", () => {
  expect(slugify(" O'Reilly")).toBe("oreilly");
  expect(slugify("foo bar")).toBe("foo-bar");
  expect(slugify("Foo Bar")).toBe("foo-bar");
  expect(slugify("foo   bar")).toBe("foo-bar");
  expect(slugify("    ")).toBe("");
  expect(slugify("")).toBe("");
  expect(slugify("!")).toBe("");
  expect(slugify("foo!@#bar")).toBe("foobar");
  expect(slugify("foo_bar")).toBe("foo_bar");
  expect(slugify("foo$bar")).toBe("foobar");
  expect(slugify("foo&bar")).toBe("foobar");
  expect(slugify("foo+bar")).toBe("foobar");
  expect(slugify("foo=bar")).toBe("foobar");
  expect(slugify("foo|bar")).toBe("foobar");
  expect(slugify("foo\\bar")).toBe("foobar");
  expect(slugify("foo:bar")).toBe("foobar");
  expect(slugify("foo;bar")).toBe("foobar");
  expect(slugify("foo'bar")).toBe("foobar");
  expect(slugify('foo"bar')).toBe("foobar");
  expect(slugify("foo<bar")).toBe("foobar");
  expect(slugify("foo>bar")).toBe("foobar");
  expect(slugify("foo[bar")).toBe("foobar");
  expect(slugify("foo]bar")).toBe("foobar");
  expect(slugify("foo^bar")).toBe("foobar");
  expect(slugify("foo`bar")).toBe("foobar");
  expect(slugify("foo{bar")).toBe("foobar");
});
