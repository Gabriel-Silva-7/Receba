import { useLocation } from 'react-router-dom';
import HeaderMobile from '../../components/HeaderMyPackages';
import * as S from './styles';
import ClosedBox from '../../assets/ClosedBoxBig.png';
import OpenBox from '../../assets/OpenBoxBig.png';

const PackageDetails = () => {
  const location = useLocation();
  const { idLocker, recebido, retirado } = location.state || {};
  console.log('idLocker:', idLocker);
  console.log('recebido:', recebido);
  console.log('retirado:', retirado);

  return (
    <S.Container>
      <HeaderMobile title="Retirar Encomenda" />
      <S.BoxLogoContainer>
        <S.BoxLogoWrapper>
          {retirado ? (
            <img src={OpenBox} />
          ) : (
            <img src={ClosedBox} alt="Locker" />
          )}
        </S.BoxLogoWrapper>
      </S.BoxLogoContainer>
    </S.Container>
  );
};

export default PackageDetails;
