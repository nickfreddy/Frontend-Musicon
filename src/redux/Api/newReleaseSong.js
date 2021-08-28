import { musiconAPI } from "./setupAPI";

export const getNewReleaseSong = (limit, token) => musiconAPI.get(`/songs/recommended?limit=${limit}`,{
  headers:{
    "Authorization": token
  }
})