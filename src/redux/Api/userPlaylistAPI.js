import { musiconAPI } from "./setupAPI"

export const getPlaylistByUserId = (userId, token) => musiconAPI.get(`/playlists/users/${userId}`,{
  headers:{
    "Authorization": token
  }
});

export const postUserPlaylist = (formData, token) => musiconAPI.post('/playlists/', formData, {
  headers: {
    "Authorization": token,
    "accept": "application/json",
    "Accept-Language": 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
  }
}) // CREATE NEW PLAYLIST

export const deleteUserPlaylist = (playlist_id, token) => musiconAPI.delete(`/playlists/${playlist_id}`,{
  headers:{
    "Authorization": token
  }
})
