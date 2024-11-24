import React from 'react';
import styled from 'styled-components';
import menuIcon from '../../assets/menuHamburguer.png';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin: 0;
  flex-grow: 1;
  text-align: center;
`;

const HeaderMobile = ({
  isOpen,
  setMenuIsOpen,
}: {
  isOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <HeaderContainer>
      <MenuButton onClick={() => setMenuIsOpen(!isOpen)}>
        <img src={menuIcon} />
      </MenuButton>
      <Title>Receba!</Title>
    </HeaderContainer>
  );
};

export default HeaderMobile;
