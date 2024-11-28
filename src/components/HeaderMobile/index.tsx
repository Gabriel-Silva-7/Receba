import React from 'react';
import styled from 'styled-components';
import menuIcon from '../../assets/menuHamburguer.png';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  background: #f5f5f5;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Title = styled.h3`
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;

const HeaderMobile = ({
  isOpen,
  setMenuIsOpen,
}: {
  isOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <MenuButton onClick={() => setMenuIsOpen(!isOpen)}>
        <img src={menuIcon} />
      </MenuButton>
      <Title onClick={() => navigate('/')}>Receba!</Title>
    </HeaderContainer>
  );
};

export default HeaderMobile;
