import { useEffect, useState } from 'react';
import { requestForToken, onMessageListener } from '../config/firebase.config';
import { API } from '../api/api';

export const useFCMToken = (userId, userType) => {
  const [fcmToken, setFcmToken] = useState('');

  useEffect(() => {
    if (userId) {
      getFCMToken();
    }
  }, [userId]);

  const getFCMToken = async () => {
    try {
      const token = await requestForToken();
      if (token) {
        setFcmToken(token);
        await saveTokenToBackend(token);
      }
    } catch (error) {
      console.error('FCM Token Error:', error);
    }
  };

//   const saveTokenToBackend = async (token) => {
//     try {
//       const endpoint = userType === 'instructor' 
//         ? '/instructor/update-fcm-token' 
//         : '/admin/update-fcm-token';
      
//       await API.post(endpoint, {
//         userId,
//         fcmToken: token
//       });
//       localStorage.setItem('fcmToken', token);
//     } catch (error) {
//       console.error('Failed to save FCM token:', error);
//     }
//   };

  return { fcmToken };
};