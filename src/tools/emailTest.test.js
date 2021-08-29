import { emailTest } from "./emailTest";

describe('Test Valid Email', () => {
  test('first email', () => {
    expect(emailTest("gedesurya125@gmail.com")).toBe(true)
  });
  test('second email', () => {
    expect(emailTest("gedesurya125gmail.com")).toBe(false)
  });
  test('third email', () => {
    expect(emailTest("gede--surya125@gmail.com")).toBe(false)
  });
  test('fourth email', () => {
    expect(emailTest("gedesurya125.@gmail.com")).toBe(false)
  });
  test('fifth email', () => {
    expect(emailTest("gedesurya125-@gmail.com")).toBe(false)
  });
  test('sixth email', () => {
    expect(emailTest("gedesu-rya125@gmail.com")).toBe(true)
  });
  test('seventh email', () => {
    expect(emailTest("gedesu.rya125@gmail.com")).toBe(true)
  });
  test('eight email', () => {
    expect(emailTest("gedesu..rya125@gmail.com")).toBe(false)
  });
  test('nineth email', () => {
    expect(emailTest("gedesurya125@gma-il.com")).toBe(true)
  });
  test('tenth email', () => {
    expect(emailTest("gedesurya125@.gmail.com")).toBe(false)
  });
  test('eleven email', () => {
    expect(emailTest("gedesurya125@gmail.co")).toBe(true)
  });
  test('twelve email', () => {
    expect(emailTest("gedesurya125@gmail..co")).toBe(false)
  });
  test('thirteen email', () => {
    expect(emailTest("gedesurya125@gmail.c")).toBe(false)
  });
  test('fourteen email', () => {
    expect(emailTest("gedesurya125@gma.il.co")).toBe(false)
  });
  test('username test', () => {
    expect(emailTest("gedesurya125")).toBe(false)
  });
})