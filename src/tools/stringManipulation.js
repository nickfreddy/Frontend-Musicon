// converting string to Title Case
export const convertToTitle = (str) =>{
  const rgx = /[\W]/g;
  return str.replace(rgx, ' ').split(' ').map(word => word.charAt(0).toUpperCase()+word.substr(1).toLowerCase()).join(' ');
}