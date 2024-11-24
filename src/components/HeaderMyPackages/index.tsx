import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';
import { HeaderContainer, MenuButton, Title } from './styles';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderMobile = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <MenuButton onClick={() => navigate(-1)}>
        <img src={arrow} alt="Voltar" />
      </MenuButton>
      <Title>{title}</Title>

      <FontAwesomeIcon icon={faSearch} />
    </HeaderContainer>
  );
};

export default HeaderMobile;
