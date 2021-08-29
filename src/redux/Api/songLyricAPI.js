import { musiconAPI } from "./setupAPI";

export const getSongLyric = (songId, token) => musiconAPI.get(`/songs/${songId}/lyrics`, {
  headers:{
    "Authorization": token
  }
})