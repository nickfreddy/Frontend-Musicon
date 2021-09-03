import React, {useEffect} from 'react'
import socketIOClient from 'socket.io-client';
import { sourceUrl } from '../redux/Api/setupAPI';
import { useDispatch } from 'react-redux';
import { setNotificationAction } from '../redux/actions/notificationAction';

const SocketIOClientComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient(sourceUrl);
    socket.on('newRating', data => {
      dispatch(setNotificationAction(data));
    })

    return () => {
      socket.disconnect();
    }
  },[dispatch])
  return (
    <></>
  )
}

export default SocketIOClientComponent
