import React from 'react';
import { useEffect } from 'react';
import { api } from '../../config/api';

const Dashboard = () => {
  useEffect(() => {
    const verifyLocker = async () => {
      try {
        const response = await api.post(
          'http://localhost:8080/api/verifyLocker',
          {
            idLocker: 1,
            fdcurso: 0,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error('Error verifying locker:', error);
      }
    };

    const token = localStorage.getItem('token');
    console.log('Token:', token);

    verifyLocker();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <h3>DENIIIIIIIIIIIIIIS DJ</h3>
      <img
        src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
        alt="Cat gif"
      />
    </div>
  );
};

export default Dashboard;
