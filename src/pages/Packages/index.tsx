import * as S from './styles';
import HeaderMobile from '../../components/HeaderMyPackages';
import ClosedBox from '../../assets/ClosedBox.png';
import OpenBox from '../../assets/OpenBox.png';
import { useNavigate } from 'react-router-dom';

const MyPackages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      idLocker: 1,
      recebido: '14/10/2024 ás 11:22',
    },
    {
      idLocker: 1,
      recebido: '15/10/2024 ás 11:22',
    },
    {
      idLocker: 1,
      recebido: '16/10/2024 ás 11:22',
    },
    {
      idLocker: 1,
      recebido: '17/10/2024 ás 11:22',
      retirado: '17/10/2024 ás 13:00',
    },
    {
      idLocker: 1,
      recebido: '18/10/2024 ás 11:22',
      retirado: '18/10/2024 ás 13:00',
    },
    {
      idLocker: 1,
      recebido: '18/10/2024 ás 11:22',
      retirado: '19/10/2024 ás 13:00',
    },
  ];

  return (
    <S.Container>
      <HeaderMobile title="Minhas Encomendas" />
      <S.LockerContainer>
        {packages.map(e => {
          return (
            <S.LockerWrapper
              onClick={() =>
                navigate('/packagedetails', {
                  state: {
                    idLocker: e.idLocker,
                    recebido: e.recebido,
                    retirado: e.retirado,
                  },
                })
              }
            >
              {e.retirado ? (
                <S.MyPackagesImg src={OpenBox} />
              ) : (
                <S.MyPackagesImg src={ClosedBox} />
              )}
              <S.Divider />
              <S.TextWrapper>
                <S.LockerTitle>Locker {e.idLocker}</S.LockerTitle>
                <S.PackageReceived>Recebido: {e.recebido}</S.PackageReceived>
                {e.retirado && (
                  <S.PackageWithdrawn>
                    Retirado: {e.retirado}
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
