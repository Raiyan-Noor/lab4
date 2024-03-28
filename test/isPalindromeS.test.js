const { isPalindrome } = require("../src/isPalindromeS");

describe("isPalindrome Test Suite", () => {
  test("Empty string should be considered a palindrome", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("Single character should be considered a palindrome", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("Palindrome string should return true", () => {
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("radar")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("Palindrome sentence string should return true", () => {
    expect(isPalindrome("able was i ere i saw elba")).toBe(true);
  });

  test("Non-palindrome string should return false", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("raiyan")).toBe(false);
  });

  test("non-palindromes sentences should return false", () => {
    expect(isPalindrome("Nazmul Sir Best")).toBe(false);
    expect(isPalindrome("Hello, World!")).toBe(false);
  });
});
