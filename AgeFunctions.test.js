const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });
});

test("Throws TypeError for negative age", () => {
  expect(() => {
    isAdult(-1);
  }).toThrow(TypeError);
});

test("Throws TypeError for non-number input", () => {
  expect(() => {
    isAdult("18");
  }).toThrow(TypeError);
});

test("Returns true for age greater than or equal to 18", () => {
  expect(isAdult(20)).toBe(true);
});

test("Returns false for age less than 18", () => {
  expect(isAdult(17)).toBe(false);
});
