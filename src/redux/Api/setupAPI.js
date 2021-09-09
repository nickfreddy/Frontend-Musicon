import axios from 'axios';

export const sourceUrl = "https://musicon.gabatch13.my.id"; // PRIMARY
// export const sourceUrl = "https://musicon-tmp.gabatch13.my.id"; // SECONDARY
// export const sourceUrl = "https://18.141.224.217"
export const sourceUrlV2 = "https://musicon-tmp.gabatch13.my.id"; // TESTING PURPOSE

export const musiconAPI = axios.create({ // PRIMARY
  baseURL: sourceUrl
});

export const musiconAPIV2 = axios.create({ // TESTING PURPOSE
  baseURL: sourceUrlV2
})
