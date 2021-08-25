import { musiconAPI } from "./setupAPI";

export const getPlaylist = (token) => musiconAPI.get('/playlists', {
  headers:{
    "Authorization": token
  }
})