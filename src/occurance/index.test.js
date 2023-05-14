const occurance = require("./index");

describe("occurance()", () => {
  test("invalid inputs", () => {
    expect(() => occurance()).toThrow();
    expect(() => occurance(1, 2)).toThrow();
    expect(() => occurance("1", 2)).toThrow();
    expect(() => occurance(1, "2")).toThrow();
  });

  test("empty inputs", () => {
    expect(occurance("", "")).toEqual([]);
    expect(occurance("1", "")).toEqual([]);
    expect(occurance("", "2")).toEqual([]);
  });

  test("valid inputs", () => {
    expect(occurance("Hello World!!, Hello all", "Hellow")).toEqual([]);
    expect(occurance("You are great as usual", " ")).toEqual([3, 7, 13, 16]);
    expect(
      occurance(
        "Contributing to the open source encourages mutual side benefits",
        "t"
      )
    ).toEqual([3, 8, 13, 16, 45, 61]);
  });

  test("case sensitivity", () => {
    expect(occurance("Hello World!!, Hello all", "hello", true)).toEqual([]);
    expect(
      occurance(
        "Contributing to the open source encourages mutual side benefits",
        "T",
        true
      )
    ).toEqual([]);
  });
});
