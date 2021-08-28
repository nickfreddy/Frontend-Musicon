// userReducerAction =================
export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER"; //used with saga
export const UPDATE_USER = "UPDATE_USER"; //used with saga
export const UPDATE_LOCAL_USER = "UPDATE_LOCAL_USER"; 
export const UNSET_USER = "UNSET_USER"; // for logging out purpose
export const REGISTER_USER = "REGISTER_USER"; // used in saga
export const SET_LOADING_USER = "SET_LOADING_USER";
export const UNSET_LOADING_USER = "UNSET_LOADING_USER";
export const SIGN_IN_USER = "SIGN_IN_USER"; // used in saga
export const OPEN_LOGIN_INFO_MODAL = "OPEN_LOGIN_INFO_MODAL";
export const CLOSE_LOGIN_INFO_MODAL = "CLOSE_LOGIN_INFO_MODAL";
export const OPEN_REGISTER_INFO_MODAL = "OPEN_REGISTER_INFO_MODAL";
export const CLOSE_REGISTER_INFO_MODAL = "CLOSE_REGISTER_INFO_MODAL";

// modal Reducer ====================
export const OPEN_MODAL_AUTH = "OPEN_MODAL_AUTH";
export const CLOSE_MODAL_AUTH = "CLOSE_MODAL_AUTH";
export const OPEN_CREATE_PLAYLIST_MODAL = "OPEN_CREATE_PLAYLIST_MODAL";
export const CLOSE_CREATE_PLAYLIST_MODAL = "CLOSE_CREATE_PLAYLIST_MODAL";

//userPlaylistReducer =================
export const GET_USER_PLAYLIST = "GET_USER_PLAYLIST"; //USED BY SAGA
export const SET_USER_PLAYLIST = "SET_USER_PLAYLIST";

export const SET_LOADING_USER_PLAYLIST = "SET_LOADING_USER_PLAYLIST";
export const UNSET_LOADING_USER_PLAYLIST = "UNSET_LOADING_USER_PLAYLIST";
export const SET_FAILED_INFO_USER_PLAYLIST = "SET_FAILED_INFO_USER_PLAYLIST";
export const SET_SUCCESS_INFO_USER_PLAYLIST = "SET_SUCCESS_INFO_USER_PLAYLIST";
export const UNSET_INFO_USER_PLAYLIST = "UNSET_INFO_USER_PLAYLIST";

export const POST_USER_PLAYLIST = "POST_USER_PLAYLIST"; //USED BY SAGA //CREATE NEW USER PLAYLIST

export const DELETE_USER_PLAYLIST = "DELETE_USER_PLAYLIST"; //USED BY SAGA
export const DELETE_LOCAL_USER_PLAYLIST = "DELETE_LOCAL_USER_PLAYLIST";


// export


//playlistDetailReducer =====================
export const GET_PLAYLIST_DETAIL = "GET_PLAYLIST_DETAIL"; //USED BY SAGA
export const SET_PLAYLIST_DETAIL = "SET_PLAYLIST_DETAIL";
export const SET_LOADING_PLAYLIST_DETAIL = "SET_LOADING_PLAYLIST_DETAIL";
export const UNSET_LOADING_PLAYLIST_DETAIL = "UNSET_LOADING_PLAYLIST_DETAIL";
export const RESET_PLAYLIST_DETAIL = "RESET_PLAYLIST_DETAIL"; 

export const ADD_SONG_TO_PLAYLIST_DETAIL =  "ADD_SONG_TO_PLAYLIST_DETAIL";
export const ADD_SONG_TO_LOCAL_PLAYLIST_DETAIL = "ADD_SONG_TO_LOCAL_PLAYLIST_DETAIL";

export const DELETE_SONG_FROM_PLAYLIST_DETAIL = "DELETE_SONG_FROM_PLAYLIST_DETAIL";
export const DELETE_SONG_FROM_LOCAL_PLAYLIST_DETAIL = "DELETE_SONG_FROM_LOCAL_PLAYLIST_DETAIL";

export const UPDATE_PLAYLIST_DETAIL = "UPDATE_PLAYLIST"; //USED BY SAGA
export const UPDATE_LOCAL_PLAYLIST_DETAIL = "UPDATE_LOCAL_PLAYLIST";



//drawer Reducer ============================
export const TOGGLE_DRAWER_OPEN = "TOGGLE_DRAWER_OPEN";


//userTopArtistsReducer=========================
export const GET_USER_TOP_ARTIST = "GET_USER_TOP_ARTIST";
export const SET_USER_TOP_ARTIST = "SET_USER_TOP_ARTIST";
export const SET_LOADING_USER_TOP_ARTIST = "SET_LOADING_USER_TOP_ARTIST";
export const UNSET_LOADING_USER_TOP_ARTIST = "UNSET_LOADING_USER_TOP_ARTIST";

//userTopSongReducer============================
export const GET_USER_TOP_SONGS = "GET_USER_TOP_SONGS";
export const SET_USER_TOP_SONGS = "SET_USER_TOP_SONGS";
export const SET_LOADING_USER_TOP_SONGS = "SET_LOADING_USER_TOP_SONGS";
export const UNSET_LOADING_USER_TOP_SONGS = "UNSET_LOADING_USER_TOP_SONGS"; 

//ratingCurrentPlaylistReducer===================
export const GET_RATING_CURRENT_PLAYLIST = "GET_RATING_CURRENT_PLAYLIST"; //USED BY SAGA
export const SET_RATING_CURRENT_PLAYLIST = "SET_RATING_CURRENT_PLAYLIST";

export const SET_LOADING_RATING_CURRENT_PLAYLIST = "SET_LOADING_RATING_CURRENT_PLAYLIST";
export const UNSET_LOADING_RATING_CURRENT_PLAYLIST = "UNSET_LOADING_RATING_CURRENT_PLAYLIST";

export const POST_RATING_CURRENT_PLAYLIST = "POST_RATING_CURRENT_PLAYLIST" //USED BY SAGA

//PLAYLIST
export const GET_PLAYLIST = "GET_PLAYLIST";
export const SET_PLAYLIST = "SET_PLAYLIST";
export const SET_LOADING_PLAYLIST = "SET_LOADING_PLAYLIST";
export const UNSET_LOADING_PLAYLIST = "UNSET_LOADING_PLAYLIST";
   
//CURRENT PLAYING
export const SET_CURRENT_PLAYING = "SET_CURRENT_PLAYING";
export const SET_PLAY_CURRENT_PLAYING = "SET_PLAY_CURRENT_PLAYING";
export const UNSET_PLAY_CURRENT_PLAYING = "UNSET_PLAY_CURRENT_PLAYING";
export const RESET_CURRENT_PLAYING = "RESET_CURRENT_PLAYING"; 
export const DISABLE_PLAYER = "DISABLE_PLAYER";
export const ENABLE_PLAYER = "ENABLE_PLAYER"; 
export const ENABLE_SHUFFLE_PLAYING = "ENABLE_SHUFFLE_PLAYING";
export const DISABLE_SHUFFLE_PLAYING = "DISABLE_SHUFFLE_PLAYING";
export const ENABLE_REPEAT_PLAYING = "ENABLE_REPEAT_PLAYING";
export const DISABLE_REPEAT_PLAYING = "DISABLE_REPEAT_PLAYING"; 

//NEW RELEASE SONG
export const GET_NEW_RELEASE_SONG = "GET_NEW_RELEASE_SONG"; // used by saga
export const SET_NEW_RELEASE_SONG = "SET_NEW_RELEASE_SONG"; //======
export const SET_LOADING_NEW_RELEASE_SONG = "SET_LOADING_NEW_RELEASE_SONG";
export const UNSET_LOADING_NEW_RELEASE_SONG = "UNSET_LOADING_NEW_RELEASE_SONG";
export const RESET_NEW_RELEASE_SONG = "RESET_NEW_RELEASE_SONG"; 

//RECOMENDED SONG
export const GET_RECOMENDED_SONG = "GET_RECOMENDED_SONG";
export const SET_RECOMENDED_SONG = "SET_RECOMENDED_SONG";
export const SET_LOADING_RECOMENDED_SONG = "SET_LOADING_RECOMENDED_SONG";
export const UNSET_LOADING_RECOMENDED_SONG = "UNSET_LOADING_RECOMENDED_SONG";
export const RESET_RECOMENDED_SONG = "RESET_RECOMENDED_SONG";
