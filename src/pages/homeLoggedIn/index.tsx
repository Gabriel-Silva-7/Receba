import { useState } from 'react';
// import { api } from '../../config/api';
import * as S from './styles';
import fotoTeste from '../../assets/fototeste.svg';
import ClosedBox from '../../assets/ClosedBox.png';
import PackagesIcon from '../../assets/Packages.svg';
import HelpImg from '../../assets/helpImg.png';
import { useNavigate } from 'react-router-dom';

const HomeLoggedIn = () => {
  const [userHasImage] = useState(true);
  const [userName] = useState('Amanda');
  const [lockerNumber] = useState(1);
  const [lockerDate] = useState('10/10/2021 ás 12:00');
  const navigate = useNavigate();

  // useEffect(() => {
  //   const verifyLocker = async () => {
  //     try {
  //       const response = await api.post(
  //         'http://localhost:8080/api/verifyLocker',
  //         {
  //           idLocker: 1,
  //           fdCurso: 0,
  //         }
  //       );
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error verifying locker:', error);
  //     }
  //   };

  //   const token = localStorage.getItem('token');
  //   console.log('Token:', token);

  //   verifyLocker();
  // }, []);

  return (
    <S.Container>
      <S.User>
        {userHasImage ? <S.UserImg src={fotoTeste} /> : <S.LogoWrapper />}
        <S.UserName>Olá, {userName}!</S.UserName>
      </S.User>
      <S.LastPackagesTitle>Últimas encomendas</S.LastPackagesTitle>
      <S.LastPackages>
        <S.LastPackagesWrapper>
          <S.PackageWrapper>
            <img src={ClosedBox} alt="Closed Box" />
            <S.LockerNumber>locker {lockerNumber}</S.LockerNumber>
            <S.LockerDate>{lockerDate}</S.LockerDate>
          </S.PackageWrapper>
          <S.Divider />
          <S.PackageWrapper>
            <img src={ClosedBox} alt="Closed Box" />
            <S.LockerNumber>locker {lockerNumber}</S.LockerNumber>
            <S.LockerDate>{lockerDate}</S.LockerDate>
          </S.PackageWrapper>
          <S.Divider />
          <S.PackageWrapper>
            <img src={ClosedBox} alt="Closed Box" />
            <S.LockerNumber>locker {lockerNumber}</S.LockerNumber>
            <S.LockerDate>{lockerDate}</S.LockerDate>
          </S.PackageWrapper>
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
