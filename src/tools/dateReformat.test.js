import { selectMonth, formatDate } from './dateReformat';

describe('Test Date Reformat Function', () => {
  test('Get Correct Month', () => {
    expect(selectMonth(new Date("2021-05-19"))).toBe('May');
  })
  test('Get Correct Month with another format', () => {
    expect(selectMonth(new Date("2021-08-07T07:43:19.071Z"))).toBe('August');
  })
  test('Get Formated Date to Display', () => {
    expect(formatDate(new Date("2021-05-19"))).toBe('May 19, 2021')
  })
  test('Get Formated Date to Display With another Format', () => {
    expect(formatDate(new Date("2021-08-07T07:43:19.071Z"))).toBe('August 7, 2021')
  })
})