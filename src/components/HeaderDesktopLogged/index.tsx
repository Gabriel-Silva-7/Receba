import React from 'react';
import styled from 'styled-components';
import menuIcon from '../../assets/menuHamburguer.png';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
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

// const Title = styled.h3`
//   margin: 0;
//   flex-grow: 1;
//   text-align: center;
// `;

const HeaderDesktop = ({
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
    </HeaderContainer>
  );
};

export default HeaderDesktop;
