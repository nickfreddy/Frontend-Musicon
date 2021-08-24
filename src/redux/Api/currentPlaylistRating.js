import { musiconAPI } from "./setupAPI";

export const getCurrentPlaylistRating = (playlistId, token) => musiconAPI.get(`/playlists/${playlistId}/rating`, {
  headers: {
    "Authorization": token
  }
});

export const postCurrentPlaylistRating = (playlistId, urlEncodedData, token) => musiconAPI.post(`/playlists/${playlistId}/rating`, urlEncodedData, {
  headers: {
    "Authorization": token
  }
})