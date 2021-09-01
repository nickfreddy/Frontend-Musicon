import { musiconAPI } from "./setupAPI";

export const getArtistAlbum = (artistId, token) => musiconAPI.get(`/artists/${artistId}`, {
  headers:{
    "Authorization": token
  }
})