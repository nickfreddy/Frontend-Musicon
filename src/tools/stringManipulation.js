// converting string to Title Case
export const convertToTitle = (str) =>{
  const rgx = /[\W]/g;
  return str.replace(rgx, ' ').split(' ').map(word => word.charAt(0).toUpperCase()+word.substr(1).toLowerCase()).join(' ');
}

export const limitString = (str, limit) => {
  if(str.length <= limit) return str;

  const newStr =str.slice(0,(limit -3));
  return newStr.padEnd(limit, '.')
}

// console.log(limitString("I Gede Surya Adi Pranata", 20))