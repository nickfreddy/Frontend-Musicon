export const selectMonth =(date) => {
  const intMonth = date.getMonth();
  switch(intMonth){
    case 0: return "January";
    case 1: return "February";
    case 2: return "March";
    case 3: return "April";
    case 4: return "May";
    case 5: return "June";
    case 6: return "July";
    case 7: return "August";
    case 8: return "September";
    case 9: return "October";
    case 10: return "November";
    default: return "December";
  }
}
export const formatDate = (date) => {
  return `${selectMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;
}