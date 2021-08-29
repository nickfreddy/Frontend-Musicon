import axios from 'axios';
// export const sourceUrl = ""; //source url 1
export const sourceUrl = "https://musicon.gabatch13.my.id"

export const musiconAPI = axios.create({
  baseURL: sourceUrl
})
