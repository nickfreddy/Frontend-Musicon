import { musiconAPI } from "./setupAPI"
export const signUpUser = (params) => musiconAPI.post('/auth/signup', params, {
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
}); //params is x-www-form-urlencoded {username, fullname, email, password}
export const signInUser = (params) => musiconAPI.post('/auth/login', params, {
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

//==========it can be used for===============
//1. getting current logged in user 
//2. and other user details
export const getUserById = (user_id, token) => musiconAPI.get(`/users/${user_id}`, {
  headers: { "Authorization": token }
})
//===========================================