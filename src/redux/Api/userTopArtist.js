import { musiconAPI } from "./setupAPI";

export const getUserTopArtists = (user_id, page, limit, token) => musiconAPI.get(`/users/${user_id}/topartists?page=${page}&limit=${limit}`,{
  headers:{
    "Authorization": token
  }
})