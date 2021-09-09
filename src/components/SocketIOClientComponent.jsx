import React, {useEffect} from 'react'
import socketIOClient from 'socket.io-client';
import { sourceUrl } from '../redux/Api/setupAPI';
// import { useDispatch } from 'react-redux';
// import { setNotificationAction } from '../redux/actions/notificationAction';
import addNotification from 'react-push-notification';
import { selectPhotoSource } from '../tools/checkPhotoSource';

const SocketIOClientComponent = () => {
  // const dispatch = useDispatch();

  const handleAddNotification = (title, message, icon) => {
    addNotification({
      native: true, // when using native, your OS will handle theming.
      title,
      message,
      // theme: 'darkblue',
      icon,
      vibrate: 2,
    });
  }

  useEffect(() => {
    const socket = socketIOClient(sourceUrl,{
      transports: ["websocket", "polling"] // use WebSocket first, if available
    });
    socket.on('newRating', data => {
      // dispatch(setNotificationAction(data));
      // console.log('DATA DARI PUSH', data);
      const user_id = localStorage.getItem('user_id');
      if(data.playlist.author._id === user_id){
        handleAddNotification("You got a new rating", `${data.ratedBy.username} rated ${data.rating} to your ${data.playlist.playlistTitle}.`,selectPhotoSource(data.ratedBy.photo, sourceUrl))
      }
    })

    return () => {
      socket.disconnect();
    }
  },[])
  return (
    <></>
  )
}

export default SocketIOClientComponent
