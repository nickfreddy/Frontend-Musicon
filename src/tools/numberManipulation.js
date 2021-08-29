export const getRandomRangedNumber = (start, end) =>{
  return Math.floor(Math.random() * (end - start)) + start
}

export const getRandomNumberExcept = (start, end, except) =>{
  const val = Math.floor(Math.random() * (end - start)) + start;
  return (val === except) ? getRandomNumberExcept(start, end, except): val;
}
// console.log(getRandomRangedNumber(0,))