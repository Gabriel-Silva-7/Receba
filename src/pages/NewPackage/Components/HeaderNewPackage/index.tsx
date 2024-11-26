import arrow from '../../../../assets/arrow.svg';
import { HeaderContainer, MenuButton } from './styles';

const HeaderMobile = ({
  setStep,
  step,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  step: number;
}) => {
  const handleBackClick = () => {
    if (step > 1 && step <= 3) setStep(prevStep => prevStep - 1);
  };

  if (step === 1) return null;

  return (
    <HeaderContainer>
      <MenuButton onClick={handleBackClick}>
        <img src={arrow} alt="Voltar" />
      </MenuButton>
    </HeaderContainer>
  );
};

export default HeaderMobile;
