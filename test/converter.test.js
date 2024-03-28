const { forceConverter } = require("../src/converter.js");

describe("Force Converter Test Suite", () => {
  test("Converts Newton to Dyne and Pound", () => {
    const val = 32;
    const expected = ["3200000.00 dyne", "7.19 pound"];
    const result = forceConverter("newton", val);
    expect(result).toEqual(expected);
  });

  test("Converts Dyne to Newton and Pound", () => {
    const val = 3200000;
    const expected = ["32.00 newton", "7.19 pound"];
    const result = forceConverter("dyne", val);
    expect(result).toEqual(expected);
  });

  test("Converts Pound to Newton and Dyne", () => {
    const val = 7.21;
    const expected = ["32.07 newton", "3207166.62 dyne"];
    const result = forceConverter("pound", val);
    expect(result).toEqual(expected);
  });

  test("Handles wrong input gracefully", () => {
    const val = 10;
    const result = forceConverter("invalid", val);
    expect(result).toBe("wrong input");
  });
});
