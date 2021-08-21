import { musiconAPI } from "./setupAPI";

export const getPlaylistDetail = (playlistId, token) => musiconAPI.get(`/playlists/${playlistId}`, {
  headers:{
    "Authorization": token
  }
})