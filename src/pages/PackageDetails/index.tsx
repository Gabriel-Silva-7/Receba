import { useLocation } from 'react-router-dom';
import HeaderMobile from '../../components/HeaderMyPackages';
import * as S from './styles';
import ClosedBox from '../../assets/ClosedBoxBig.png';
import OpenBox from '../../assets/OpenBoxBig.png';
import Checkbox from '@mui/material/Checkbox';
import { api } from '../../config/api';

const PackageDetails = () => {
  const location = useLocation();
  const { idLocker, recebido, retirado } = location.state || {};
  console.log('idLocker:', idLocker);
  console.log('recebido:', recebido);
  console.log('retirado:', retirado);

  const unlockLocker = async () => {
    const response = await api.post('/updateLocker', {
      idLocker: idLocker,
      status: 1,
      idUser: '',
    });
    console.log(response.data);
  };

  return (
    <S.Container>
      {window.screen.width < 768 && <HeaderMobile title="Retirar Encomenda" />}
      <S.BoxLogoContainer>
        <S.BoxLogoWrapper>
          {retirado ? (
            <img src={OpenBox} />
          ) : (
            <img src={ClosedBox} alt="Locker" />
          )}
        </S.BoxLogoWrapper>
      </S.BoxLogoContainer>
      <S.TextWrapper>
        <S.LabelTitle>
          {retirado ? 'Encomenda já retirada no:' : 'Encomenda no:'}
        </S.LabelTitle>
        <S.LabelDescription>Locker {idLocker}</S.LabelDescription>
      </S.TextWrapper>
      <S.TextWrapper>
        <S.LabelTitle>Recebido:</S.LabelTitle>
        <S.LabelDescription>14/01/2024 às 17:23</S.LabelDescription>
      </S.TextWrapper>
      {!retirado && (
        <>
          <S.CheckboxWrapper>
            <S.WrapperCheckbox>
              <Checkbox id="awareness" name="awareness" />
              <label htmlFor="awareness">
                Estou ciente que após desbloquear o locker terei um prazo de 5
                minutos para retirada da encomenda.
              </label>
            </S.WrapperCheckbox>
          </S.CheckboxWrapper>
          <S.ButtonWrapper>
            <S.UnlockLockerButton onClick={unlockLocker}>
              Desbloquear locker
            </S.UnlockLockerButton>
          </S.ButtonWrapper>
        </>
      )}
      {retirado && (
        <S.TextWrapper>
          <S.LabelTitle>Retirado:</S.LabelTitle>
          <S.LabelDescription>14/01/2024 às 17:23</S.LabelDescription>
        </S.TextWrapper>
      )}
    </S.Container>
  );
};

export default PackageDetails;
