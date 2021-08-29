import { musiconAPI } from "./setupAPI";

export const getNewReleaseSong = (limit, token) => musiconAPI.get(`/songs/new?limit=${limit}`,{
  headers:{
    "Authorization": token
  }
})