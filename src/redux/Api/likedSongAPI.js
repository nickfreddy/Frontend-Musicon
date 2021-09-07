import { musiconAPI } from "./setupAPI";

/**
 * 
 * @param {string} songId 
 * @param {string} token 
 * @returns 
 */
export const getLikedSongStatus = (songId, token) => musiconAPI.get(`/songs/${songId}/like`,{
  headers:{
    "Authorization": token
  }
})

/**
 * 
 * @param {string} songId 
 * @param {{like: boolean}} urlEncodedData 
 * @param {string} token 
 * @returns 
 */
export const setLikeSongStatus = (songId, urlEncodedData, token) => musiconAPI.post(`/songs/${songId}/like`, urlEncodedData, {
  headers:{
    "Authorization": token,
    // 'Content-Type': 'application/json'
  }
} )

