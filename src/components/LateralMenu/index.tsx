import React from 'react';
import logo from '../../assets/logomini.png';

interface LateralMenuProps {
  isOpen: boolean;
  setMenuIsOpen: (isOpen: boolean) => void;
}
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  faHouse,
  faBoxesStacked,
  faUser,
  faHandHoldingHeart,
  faRightFromBracket,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import fotoTeste from '../../assets/fototeste.svg';
import { useAuth } from '../../context/AuthContext';

const LateralMenu: React.FC<LateralMenuProps> = ({ isOpen, setMenuIsOpen }) => {
  const toggleMenu = () => {
    setMenuIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [userHasImage] = React.useState(false);
  const checkIsSelected = (path: string) => {
    return location.pathname === path;
  };
  const { logout } = useAuth();

  return (
    <>
      <S.MenuContainer isOpen={isOpen}>
        <S.MenuHeaderWrapper>
          <S.LogoWrapper>
            <S.Logo src={logo} />
          </S.LogoWrapper>
          <S.Title>Receba!</S.Title>
          <S.CloseButton onClick={toggleMenu}>
            <S.CloseIcon icon={faX} />
          </S.CloseButton>
        </S.MenuHeaderWrapper>
        <S.MenuItem
          isSelected={checkIsSelected('/')}
          onClick={() => navigate('/')}
        >
          <S.Icon icon={faHouse} isSelected={checkIsSelected('/')} />
          Home
        </S.MenuItem>
        <S.MenuItem
          isSelected={checkIsSelected('/mypackages')}
          onClick={() => navigate('/mypackages')}
        >
          <S.Icon
            icon={faBoxesStacked}
            isSelected={checkIsSelected('/mypackages')}
          />
          Encomendas
        </S.MenuItem>
        <S.MenuItem
          isSelected={checkIsSelected('/profile')}
          onClick={() => navigate('/profile')}
        >
          <S.Icon icon={faUser} isSelected={checkIsSelected('/profile')} />
          Perfil
        </S.MenuItem>
        <S.MenuItem
          isSelected={checkIsSelected('/help')}
          onClick={() => navigate('/help')}
        >
          <S.Icon
            icon={faHandHoldingHeart}
            isSelected={checkIsSelected('/help')}
          />
          Ajuda
        </S.MenuItem>
        <S.User>
          {userHasImage ? <S.UserImg src={fotoTeste} /> : <S.LogoWrapper />}
          <S.UserName>Amanda Belo</S.UserName>
          <S.LogoutButton onClick={() => logout()}>
            <S.LogoutIcon icon={faRightFromBracket} />
          </S.LogoutButton>
        </S.User>
      </S.MenuContainer>
    </>
  );
};

export default LateralMenu;
