import axios from 'axios';

export const sourceUrl = "https://musicon.gabatch13.my.id";
// export const sourceUrl = "https://musicon-tmp.gabatch13.my.id"; //USED
// export const sourceUrl = "https://18.141.224.217"
export const sourceUrlV2 = "https://musicon-tmp.gabatch13.my.id";

export const musiconAPI = axios.create({
  baseURL: sourceUrl
});

export const musiconAPIV2 = axios.create({
  baseURL: sourceUrlV2
})
