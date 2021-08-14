import { convertToTitle } from "./stringManipulation";

describe('Test String Manipulation Funtion', () => {
  test('Convert To Title Case', () => {
    expect(convertToTitle("the SwOrd and the beaSt")).toBe("The Sword And The Beast");
  });
  test('Convert To Title Case 2', () => {
    expect(convertToTitle("THE PRINCE AND THE BEAST")).toBe("The Prince And The Beast");
  });
  test('Convert To Title Case 3', () => {
    expect(convertToTitle("the prince and the beast")).toBe("The Prince And The Beast");
  });

})