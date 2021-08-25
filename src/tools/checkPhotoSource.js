export const checkPhotoSource = (photo) => {
  const urlCheckRgx = /^[https:|http:].*$/gi
  return urlCheckRgx.test(photo)
}

// console.log(checkPhotoSource("https://i1.sndcdn.com/artworks-000560586507-q7vve7-t500x500.jpg"))
/**
 * This function convert photo source to readable content in html to avoid image broken
 * it will return correct photo type that can be read by src of img tag
 * @param {object || string} photo = it has to be blob type or url string or path string
 * @param {string} sourceUrl = it has to be string of sour url
 * @returns 
 */
export const selectPhotoSource = (photo, sourceUrl) => { //case value is not falsy
  if(typeof photo === "object") return URL.createObjectURL(photo);
  if(checkPhotoSource(photo)) return photo; //check if photo contain https:
  return sourceUrl+photo
}
