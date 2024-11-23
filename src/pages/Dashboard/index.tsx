import { useEffect } from 'react';
import { api } from '../../config/api';
import * as S from './styles';

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
    <S.Container>
      <h1>Dashboard</h1>
    </S.Container>
  );
};

export default Dashboard;
