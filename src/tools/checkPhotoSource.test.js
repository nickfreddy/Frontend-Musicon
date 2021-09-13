import * as checkPhoto from './checkPhotoSource';

describe("Test checkPhotoSource Function", () => {
  test('Should return true if photo source contain http', () => {
    expect(checkPhoto.checkPhotoSource("http://musicon.gabatch13.com/somePhotoUrl.png")).toBeTruthy();
  });
  test('Should return true if photo source contain https', () => {
    expect(checkPhoto.checkPhotoSource("https://musicon.gabatch13.com/somePhotoUrl.png")).toBeTruthy();
  });
  test('Should return false if photo source not contain https / http', () => {
    expect(checkPhoto.checkPhotoSource("/somePhotoUrl.png")).toBeFalsy();
  });
  test('Should return false if photo source type of object', () => {
    expect(checkPhoto.checkPhotoSource("/somePhotoUrl.png")).toBeFalsy();
  });
});

describe("Test selectPhotoSource Function", () => {
  test('should return complete url if photo parameters only provide end point', () => {
    expect(checkPhoto.selectPhotoSource("/image-endpoint.jpg", "https://musicon.gabatch.13.py")).toMatch(/^[https:|http:].*$/gi);
  });
  test('should return same url if photo parameters already contain https://', () => {
    expect(checkPhoto.selectPhotoSource("https://musicon.gabatch.13.py/image-endpoint.jpg", "https://musicon.gabatch.13.py")).toBe("https://musicon.gabatch.13.py/image-endpoint.jpg");
  });
})