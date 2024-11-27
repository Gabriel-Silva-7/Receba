import { useEffect, useState } from 'react';
import { api } from '../../config/api';
import { useAuth } from '../../context/AuthContext';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import condominio from '../../assets/condominio.jpg';
import lockerlogo from '../../assets/locker.png';
import { CircularProgress } from '@mui/material';

const ManageLockers = () => {
  const [loading, setLoading] = useState(false);
  const [lockers, setLockers] = useState<any>([]);
  const [userHasImage] = useState(true);
  const { email } = useAuth();
  const navigate = useNavigate();

  const getLockers = async () => {
    setLoading(true);
    const response = await api.post('/getLockerPerCondominium', {
      email: email,
    });
    setLockers(response.data.getLocker);
    setLoading(false);
  };

  useEffect(() => {
    getLockers();
  }, []);

  if (loading)
    return (
      <S.Container>
        <S.LoadingContainer>
          <CircularProgress />
        </S.LoadingContainer>
      </S.Container>
    );

  return (
    <S.Container>
      <S.User>
        {userHasImage ? <S.UserImg src={condominio} /> : <S.LogoWrapper />}
        <S.UserName>{lockers[0]?.Condominio || 'Condominio.'}</S.UserName>
      </S.User>
      <S.LockersContainer>
        {lockers.map((locker: any) => {
          return (
            <S.LockerWrapper
              key={locker.id}
              onClick={() => {
                navigate('/detailsmanagelockers', {
                  state: {
                    locker: locker,
                  },
                });
              }}
            >
              <img src={lockerlogo} />
              <S.Divider />
              <S.Title>Locker 0{locker.IdLocker}</S.Title>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="28"
                viewBox="0 0 16 28"
                fill="none"
              >
                <path
                  d="M14.6463 12.1987C15.3885 12.9555 15.3885 14.1846 14.6463 14.9415L3.24633 26.5665C2.50414 27.3233 1.29883 27.3233 0.556641 26.5665C-0.185547 25.8096 -0.185547 24.5805 0.556641 23.8237L10.6148 13.567L0.562578 3.3104C-0.179609 2.55356 -0.179609 1.32446 0.562578 0.567627C1.30477 -0.189209 2.51008 -0.189209 3.25227 0.567627L14.6523 12.1926L14.6463 12.1987Z"
                  fill="#333333"
                />
              </svg>
            </S.LockerWrapper>
          );
        })}
      </S.LockersContainer>
    </S.Container>
  );
};

export default ManageLockers;
