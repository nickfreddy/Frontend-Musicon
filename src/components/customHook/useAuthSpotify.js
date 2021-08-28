import {
  // useState,
  useEffect
} from 'react'
// import { useHistory } from 'react-router';
import axios from 'axios';
import { sourceUrl } from '../../redux/Api/setupAPI';

const useAuthSpotify = (code) => {
  // const [accessToken, setAccessToken] = useState("");
  // const [refreshToken, setRefreshToken] = useState("");
  // const [expireIn, setExpireIn] = useState("");
  // const history = useHistory()

  useEffect(() => {
    axios.post(`${sourceUrl}/auth/spotify/get_token`, { code })
      .then(res => console.log(res.data))
      .catch(err => console.log('ERROR GETTING AUTH TOKEN', err.response))
  }, [code])

}

export default useAuthSpotify;


