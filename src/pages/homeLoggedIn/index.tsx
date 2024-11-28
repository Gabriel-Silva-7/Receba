import { useEffect, useState } from 'react';
import { api } from '../../config/api';
import * as S from './styles';
import UserLogoDefault from '../../assets/user.png';
import ClosedBox from '../../assets/ClosedBox.png';
import OpenBox from '../../assets/OpenBox.png';
import PackagesIcon from '../../assets/Packages.svg';
import HelpImg from '../../assets/helpImg.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

const HomeLoggedIn = () => {
  const [userHasImage, setUserHasImage] = useState<any>();
  const navigate = useNavigate();
  const { name, email, setImage } = useAuth();
  const [lastPackages, setLastPackages] = useState([]);
  const [user, setUser] = useState<any>({});
  const [imgLoading, setImgLoading] = useState(true);
  console.log(userHasImage, 'userHasImage');
  console.log(imgLoading, 'imgLoading');

  const verifyLocker = async () => {
    try {
      await api.post('/verifyLocker', {
        idLocker: 1,
        fdCurso: 0,
      });
    } catch (error) {
      console.error('Error verifying locker:', error);
    }
  };

  const getProfileInfo = async () => {
    setLoading(true);
    try {
      const response = await api.post('/userDetails', {
        email: email,
      });
      setUser(response.data.userDetails[0]);
      setImage(response.data.userDetails[0].Imagem);
      setUserHasImage(response.data.userDetails[0].Imagem !== null);
    } catch (error) {
      console.error('Error fetching profile info:', error);
    } finally {
      setLoading(false);
      setImgLoading(false);
    }
  };

  const getLast3Packages = async () => {
    await api
      .post('/getLastLockerHistory', {
        email: email,
      })
      .then(response => {
        setLastPackages(response.data.getLastHistory);
      })
      .catch(error => {
        console.error('Error getting last packages:', error);
      });
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await verifyLocker();
      await getLast3Packages();
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    getProfileInfo();
  }, []);

  if (loading) {
    return (
      <S.LoadingContainer>
        <CircularProgress />
      </S.LoadingContainer>
    );
  }

  return (
    <S.Container>
      <S.User>
        {/* {imgLoading ? (
          <CircularProgress />
        ) : imgLoading ? (
          <S.UserImg onClick={() => navigate('/profile')} src={user?.Imagem} />
        ) : (
          <S.UserImg
            onClick={() => navigate('/profile')}
            src={UserLogoDefault}
          />
        )} */}
        {imgLoading ? (
          <CircularProgress />
        ) : userHasImage ? (
          <S.UserImg onClick={() => navigate('/profile')} src={user?.Imagem} />
        ) : (
          <S.UserImg
            onClick={() => navigate('/profile')}
            src={UserLogoDefault}
          />
        )}
        <S.UserName>
          Olá, {(name && name.split(' ')[0]) || 'Usuário.'}!
        </S.UserName>
      </S.User>
      <S.LastPackagesTitle>Últimas encomendas</S.LastPackagesTitle>
      <S.LastPackages>
        <S.LastPackagesWrapper>
          {lastPackages.map((e: any, index: number) => {
            const isLastItem = index === lastPackages.length - 1;
            return (
              <>
                <S.PackageWrapper
                  key={`${e.IdLocker} - ${e.DataHoraEntrega} - ${e.DataHoraRetirada}- ${e.IdHistorico}`}
                  onClick={() =>
                    navigate('/packagedetails', {
                      state: {
                        idHistorico: e.IdHistorico,
                        idLocker: e.IdLocker,
                        recebido: e.DataHoraEntrega,
                        retirado: e.DataHoraRetirada,
                      },
                    })
                  }
                >
                  {e.DataHoraRetirada ? (
                    <img src={OpenBox} alt="Open Box" />
                  ) : (
                    <img src={ClosedBox} alt="Closed Box" />
                  )}
                  <S.LockerNumber>locker {e.IdLocker}</S.LockerNumber>
                  <S.LockerDate>
                    {!e.DataHoraRetirada &&
                      new Date(e.DataHoraEntrega).toLocaleString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    {!e.DataHoraRetirada && ' ás '}
                    {!e.DataHoraRetirada &&
                      new Date(e.DataHoraEntrega).toLocaleTimeString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    {e.DataHoraRetirada &&
                      new Date(e.DataHoraRetirada).toLocaleString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                    {e.DataHoraRetirada && ' ás '}
                    {e.DataHoraRetirada &&
                      new Date(e.DataHoraRetirada).toLocaleTimeString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                  </S.LockerDate>
                </S.PackageWrapper>
                {!isLastItem && <S.Divider />}
              </>
            );
          })}
          {lastPackages.length === 0 && (
            <S.NoPackages>
              <img
                src="https://media.tenor.com/EMbleniyh5sAAAAi/jorrbox-jorrparivar.gif"
                alt=""
              />
              <S.NoPackageText>
                Você ainda não possui encomendas registradas.
              </S.NoPackageText>
            </S.NoPackages>
          )}
        </S.LastPackagesWrapper>
      </S.LastPackages>

      <S.ContainerMyPackages>
        <S.MyPackages
          onClick={() => {
            navigate('/mypackages');
          }}
        >
          <S.MyPackagesImg src={PackagesIcon} />
          <S.Divider />
          <S.MyPackagesTitle>Minhas encomendas</S.MyPackagesTitle>
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
        </S.MyPackages>
      </S.ContainerMyPackages>

      <S.ContainerNeedHelp>
        <S.NeedHelp
          onClick={() => {
            navigate('/help');
          }}
        >
          <S.NeedHelpIcon src={HelpImg} />
          <S.Divider />
          <S.NeedHelpTitle>Precisa de ajuda?</S.NeedHelpTitle>
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
        </S.NeedHelp>
      </S.ContainerNeedHelp>
    </S.Container>
  );
};

export default HomeLoggedIn;
