import React, { useEffect } from 'react';
import logo from '../../assets/logomini.png';
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../config/api';
import {
  faHouse,
  faBoxesStacked,
  faUser,
  faHandHoldingHeart,
  faRightFromBracket,
  faUserGroup,
  faKey,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import fotoTeste from '../../assets/fototeste.svg';
import { useAuth } from '../../context/AuthContext';

interface LateralMenuProps {
  isOpen: boolean;
  setMenuIsOpen: (isOpen: boolean) => void;
}

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
  const { logout, email, name } = useAuth();
  const [isAdmin, setIsAdmin] = React.useState(false);

  const getIsAdmin = async () => {
    try {
      const response = await api.post('/verifyUserAdmin', {
        email: email,
      });
      setIsAdmin(response.data.value);
    } catch (error) {
      console.error('Error verifying admin status:', error);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    getIsAdmin();
  }, []);

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
          onClick={() => {
            navigate('/');
            if (window.innerWidth <= 768) setMenuIsOpen(false);
          }}
        >
          <S.Icon icon={faHouse} isSelected={checkIsSelected('/')} />
          Home
        </S.MenuItem>
        <S.MenuItem
          isSelected={checkIsSelected('/mypackages')}
          onClick={() => {
            navigate('/mypackages');
            if (window.innerWidth <= 768) setMenuIsOpen(false);
          }}
        >
          <S.Icon
            icon={faBoxesStacked}
            isSelected={checkIsSelected('/mypackages')}
          />
          Encomendas
        </S.MenuItem>
        <S.MenuItem
          isSelected={checkIsSelected('/profile')}
          onClick={() => {
            navigate('/profile');
            if (window.innerWidth <= 768) setMenuIsOpen(false);
          }}
        >
          <S.Icon icon={faUser} isSelected={checkIsSelected('/profile')} />
          Perfil
        </S.MenuItem>
        <S.MenuItem
          isSelected={checkIsSelected('/help')}
          onClick={() => {
            navigate('/help');
            if (window.innerWidth <= 768) setMenuIsOpen(false);
          }}
        >
          <S.Icon
            icon={faHandHoldingHeart}
            isSelected={checkIsSelected('/help')}
          />
          Ajuda
        </S.MenuItem>
        {isAdmin && (
          <>
            <S.MenuItem
              isSelected={checkIsSelected('/registerresident')}
              onClick={() => {
                navigate('/registerresident');
                if (window.innerWidth <= 768) setMenuIsOpen(false);
              }}
            >
              <S.Icon
                icon={faUserGroup}
                isSelected={checkIsSelected('/registerresident')}
              />
              Cadastrar Morador
            </S.MenuItem>
            <S.MenuItem
              isSelected={checkIsSelected('/managerLockers')}
              onClick={() => {
                navigate('/managerLockers');
                if (window.innerWidth <= 768) setMenuIsOpen(false);
              }}
            >
              <S.Icon
                icon={faKey}
                isSelected={checkIsSelected('/managerLockers')}
              />
              Controle de Lockers
            </S.MenuItem>
          </>
        )}

        <S.User>
          {userHasImage ? <S.UserImg src={fotoTeste} /> : <S.LogoWrapper />}
          <S.UserName>{name}</S.UserName>
          <S.LogoutButton onClick={() => logout()}>
            <S.LogoutIcon icon={faRightFromBracket} />
          </S.LogoutButton>
        </S.User>
      </S.MenuContainer>
    </>
  );
};

export default LateralMenu;
