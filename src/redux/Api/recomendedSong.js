import { musiconAPI } from "./setupAPI";

export const getRecomendedSong = (limit, token) => musiconAPI.get(`/songs/recommended?limit=${limit}`,{
  headers:{
    "Authorization": token
  }
})