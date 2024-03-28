const { quickSort } = require("../src/quickSort");

describe("quickSort Test Suite", () => {
  test("Sorts an array of numbers in ascending order", () => {
    const input = [3, 7, 2, 5, 1];
    const expected = [1, 2, 3, 5, 7];
    const sortedArray = quickSort(input);
    expect(sortedArray).toEqual(expected);
  });

  test("Handles empty arrays", () => {
    const input = [];
    const sortedArray = quickSort(input);
    expect(sortedArray).toEqual([]);
  });

  test("Handles arrays with a single element", () => {
    const input = [5];
    const sortedArray = quickSort(input);
    expect(sortedArray).toEqual([5]);
  });

  test("Sorts arrays with duplicate elements", () => {
    const input = [5, 2, 1, 4, 2];
    const expected = [1, 2, 2, 4, 5];
    const sortedArray = quickSort(input);
    expect(sortedArray).toEqual(expected);
  });

  test("Sorts arrays with negative numbers", () => {
    const input = [-3, 7, -2, 5, 1];
    const expected = [-3, -2, 1, 5, 7];
    const sortedArray = quickSort(input);
    expect(sortedArray).toEqual(expected);
  });
});
