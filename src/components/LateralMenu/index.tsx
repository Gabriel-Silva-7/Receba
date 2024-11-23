import React, { useState } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const MenuContent = styled.div`
  background-color: white;
  width: 80%;
  height: 100%;
  padding: 20px;
`;

const MenuButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
`;

const LateralMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton onClick={toggleMenu}>Menu</MenuButton>
      <MenuContainer isOpen={isOpen}>
        <MenuContent>
          <h2>Menu</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </MenuContent>
      </MenuContainer>
    </>
  );
};

export default LateralMenu;
