import { musiconAPI } from "./setupAPI";

export const getPlaylistDetail = (playlistId, token) => musiconAPI.get(`/playlists/${playlistId}`, {
  headers:{
    "Authorization": token
  }
})

export const addSongToPlaylist = (playlist_id, song_id, token) => musiconAPI.post(`/playlists/${playlist_id}/${song_id}`,{},{
  headers: {
    "Authorization": token
  }
})

export const deleteSongFromPlaylist = (playlist_id, song_id, token) => musiconAPI.delete(`/playlists/${playlist_id}/${song_id}`,{
  headers:{
    "Authorization": token
  }
})

export const updatePlaylistDetail = (playlist_id, formData, token) => musiconAPI.put(`/playlists/update/${playlist_id}`, formData, {
  headers: {
    "Authorization": token,
    "accept": "application/json",
    "Accept-Language": 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
  }
}) // UPDATE PLAYLIST DETAIL