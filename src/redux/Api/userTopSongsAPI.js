import { musiconAPI } from "./setupAPI";

export const getUserTopSongs = (user_id, page, limit, token) => musiconAPI.get(`/users/${user_id}/topsongs?limit=${limit}&page=${page}`,{
  headers:{
    "Authorization": token
  }
})