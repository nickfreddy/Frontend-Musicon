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

export const updateUserById = (user_id, formData, token) => musiconAPI.put(`/users/updatedata/${user_id}`, formData, {
  headers: {
    "Authorization": token,
    "accept": "application/json",
    "Accept-Language": 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
  }
})

export const postGoogleDataUser = (urlEncodedData) => musiconAPI.post(`/auth/google/v2`, urlEncodedData, {
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

export const postFacebookDataUser = (urlEncodedData) => musiconAPI.post(`/auth/facebook/v2`, urlEncodedData, {
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
})