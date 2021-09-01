import React, {useEffect} from 'react';
import { 
  useDispatch, 
  // connect 
} from 'react-redux';
import { getArtistAlbumAction } from '../../redux/actions/artistAlbumAction';
import { useParams } from 'react-router-dom';

const ArtistPage = () => {
  const dispatch = useDispatch();
  const {artist_id} = useParams()
  // console.log('ARTIST ID SEKARANG',artist_id)

  useEffect(() => {
    dispatch(getArtistAlbumAction(artist_id))
  }, [artist_id, dispatch])
  return (
    <div>
      ARTIST PAGE
    </div>
  )
}

export default ArtistPage
