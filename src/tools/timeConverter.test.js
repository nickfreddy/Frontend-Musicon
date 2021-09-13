import * as timeConverter from './timeConverter'

describe('timeConverter Test', () => {
  test('secondToHMS should Return 3 min', () => {
    expect(timeConverter.secondsToHMS(234)).toBe('3 min');
  })
  test('secondToHMS should Return 50 min', () => {
    expect(timeConverter.secondsToHMS(3020)).toBe('50 min')
  });
  test('secondToHMS should Return 3 hr 35 min', () => {
    expect(timeConverter.secondsToHMS(12930)).toBe('3 hr 35 min')
  });
  //==============================================
  test('secondsDuration should Return 3:54', () => {
    expect(timeConverter.secondsDuration(234)).toBe('3:54')
  });
  test('secondsDuration should Return 50:20', () => {
    expect(timeConverter.secondsDuration(3020)).toBe('50:20')
  });
  test('secondsDuration should Return 3:35:30', () => {
    expect(timeConverter.secondsDuration(12930)).toBe('3:35:30')
  });
  //================================================
  test('convertToTwoDigits should return double digit if parameter one digit', () => {
    expect(timeConverter.convertToTwoDigits(5)).toBe('05');
  });
  test('convertToTwoDigits should return original digit if value has been 2 (more than 9) digit', () => {
    expect(timeConverter.convertToTwoDigits(50)).toBe('50');
  });

  //=================================================
  test('secondtoDuration with Zero', () => {
    expect(timeConverter.secondsDurationWithZero(234)).toBe('03:54');
  });
  test('secondtoDuration with Zero with hour', () => {
    expect(timeConverter.secondsDurationWithZero(12930)).toBe('03:35:30');
  });

  
})