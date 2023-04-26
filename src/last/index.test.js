const last = require("./index");

describe("function last", () => {
  test("`Mango` last char should be `o`", () => {
    expect(last("Mango")).toBe("o");
  });

  test("`Mango` last char should not be `M`", () => {
    expect(last("Mango")).not.toBe("M");
  });

  test("Number `1` last char should throw an error `string`", () => {
    expect(() => {
      last(1);
    }).toThrow();
  });
});
