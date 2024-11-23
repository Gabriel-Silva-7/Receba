import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  position: relative;
`;

export const Logo = styled.h3`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
`;

export const Menu = styled.div<{ open: boolean }>`
  transition: max-height 0.5s ease-in-out;
  max-height: ${({ open }) => (open ? '300px' : '0')};
  overflow: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const MenuItem = styled.a`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const SingInSignUpWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;

  @media (max-width: 374px) {
    flex-direction: column;
  }
`;

export const SignInSingUpButton = styled.a`
  display: flex;
  font-size: 14px;
  text-decoration: none;
  font-family: Poppins;
  color: #000;
  &:hover {
    background-color: #f1f1f1;
  }
`;
