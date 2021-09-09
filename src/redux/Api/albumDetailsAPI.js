import { musiconAPI } from "./setupAPI";

export const getAlbumDetails = (albumId, token) => musiconAPI.get(`/albums/${albumId}`,{
  headers:{
    "Authorization": token
  }
})