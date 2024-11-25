import * as S from './styles';
import HeaderMobile from '../../components/HeaderMyPackages';
import ClosedBox from '../../assets/ClosedBox.png';
import OpenBox from '../../assets/OpenBox.png';
import { useNavigate } from 'react-router-dom';
import { api } from '../../config/api';
import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const MyPackages = () => {
  const navigate = useNavigate();
  const { email } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const verifyHistoryLocker = async () => {
    try {
      const response = await api.post('/getLockerHistory', {
        email: email,
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error verifying locker:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await verifyHistoryLocker();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      {window.screen.width < 768 && <HeaderMobile title="Minhas Encomendas" />}
      {loading && (
        <S.LoadingContainer>
          <CircularProgress />
        </S.LoadingContainer>
      )}
      <S.LockerContainer>
        {data &&
          data?.map((e: any) => {
            return (
              <S.LockerWrapper
                onClick={() =>
                  navigate('/packagedetails', {
                    state: {
                      idLocker: e.IdLocker,
                      recebido: e.DataHoraEntrega,
                      retirado: e.DataHoraRetirada,
                    },
                  })
                }
              >
                {e.DataHoraRetirada ? (
                  <S.MyPackagesImg src={OpenBox} />
                ) : (
                  <S.MyPackagesImg src={ClosedBox} />
                )}
                <S.Divider />
                <S.TextWrapper>
                  <S.LockerTitle>Locker {e.IdLocker}</S.LockerTitle>
                  <S.PackageReceived>
                    Recebido:{' '}
                    {new Date(e.DataHoraEntrega).toLocaleString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}{' '}
                    ás{' '}
                    {new Date(e.DataHoraEntrega).toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </S.PackageReceived>
                  {e.DataHoraRetirada && (
                    <S.PackageWithdrawn>
                      Retirado:{' '}
                      {new Date(e.DataHoraRetirada).toLocaleString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}{' '}
                      ás{' '}
                      {new Date(e.DataHoraRetirada).toLocaleTimeString(
                        'pt-BR',
                        {
                          hour: '2-digit',
                          minute: '2-digit',
                        }
                      )}
                    </S.PackageWithdrawn>
                  )}
                </S.TextWrapper>
                <S.ArrowIconWrapper>
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
                </S.ArrowIconWrapper>
              </S.LockerWrapper>
            );
          })}
      </S.LockerContainer>
    </S.Container>
  );
};

export default MyPackages;
