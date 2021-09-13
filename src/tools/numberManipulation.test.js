import * as numberManipulation from './numberManipulation';

describe("Test Number Manipulation Funtion", () => {
  test("Get random ranged number should return 1 - 5 if we provide param start = 1 and end = 6", () => {
    expect(numberManipulation.getRandomRangedNumber(1, 6).toString()).toMatch(/[1-5]/);
  });
  test("Get random ranged number should return error NaNs if provided value is not a number", () => {
    expect(numberManipulation.getRandomRangedNumber("s", "v")).toBe("NaNs");
  });
  test("Get random ranged number should return 10 - 20 if we provide param start = 10 and end = 21", () => {
    expect(numberManipulation.getRandomRangedNumber(10, 21).toString()).toMatch(/[10-21]/);
  });

  test("Get random number except should return 1-5 or 7-10 if we provide param start = 1, end = 11, except = 6", () => {
    expect((numberManipulation.getRandomNumberExcept(1, 11, 6)).toString()).toMatch(/[^6]/);
  })

})