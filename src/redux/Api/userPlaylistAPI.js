import { musiconAPI } from "./setupAPI"

export const getPlaylistByUserId = (userId, token) => musiconAPI.get(`/playlists/users/${userId}`,{
  headers:{
    "Authorization": token
  }
});

