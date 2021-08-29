export const getRandomRangedNumber = (start, end) =>{
  return Math.floor(Math.random() * (end - start)) + start
}
// console.log(getRandomRangedNumber(0,))