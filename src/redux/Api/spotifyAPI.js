// export const CLIENT_ID = "0270d38ceb7a482d808e67e561acb008";
const CLIENT_ID = "47cb4e9a5bed4438b64fb3956150d333";
// export const CLIENT_SECRET = "48270b43bd1b4297a053d60310e8a523";

const scope = [
  "streaming",
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state"
];

const redirect_uri = "http://localhost:3000/user";

export const AUTH_SPOTIFY_URL =  `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${redirect_uri}&scope=${scope.join('%20')}`
