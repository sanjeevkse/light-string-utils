const length = require("./index");

describe("function length", () => {
  test("`Mango` length should be `5`", () => {
    expect(length("Mango")).toBe(5);
  });

  test("`Mango` length should not be 8", () => {
    expect(length("Mango")).not.toBe(8);
  });

  test("Number `1` length should throw an error `string`", () => {
    expect(() => {
      length(1);
    }).toThrow();
  });
});
