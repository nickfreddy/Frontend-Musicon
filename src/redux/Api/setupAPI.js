import axios from 'axios';
// export const sourceUrl = ""; //source url 1
export const sourceUrl = "https://musicon.gabatch13.my.id"
// export const sourceUrl = "https://18.141.224.217"


export const musiconAPI = axios.create({
  baseURL: sourceUrl
})
