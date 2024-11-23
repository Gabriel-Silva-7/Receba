import React, { useState } from 'react';
import {
  Container,
  MenuButton,
  Logo,
  Menu,
  MenuItem,
  SingInSignUpWrapper,
  SignInSingUpButton,
} from './styles';
import { useAuth } from '../../context/AuthContext';

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <MenuButton onClick={toggleMenu}>&#9776;</MenuButton>
      <Logo onClick={() => (window.location.href = '/')}>Receba!</Logo>
      <SingInSignUpWrapper>
        {isAuthenticated && window.innerWidth > 375 ? (
          <SignInSingUpButton onClick={() => (window.location.href = '/')}>
            Minhas Encomendas
          </SignInSingUpButton>
        ) : window.innerWidth > 375 ? (
          <>
            <SignInSingUpButton
              onClick={() => (window.location.href = '/login')}
            >
              Entrar
            </SignInSingUpButton>
            <SignInSingUpButton
              onClick={() => (window.location.href = '/register')}
            >
              Cadastro
            </SignInSingUpButton>
          </>
        ) : null}
      </SingInSignUpWrapper>
      <Menu open={open}>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/about">About</MenuItem>
        <MenuItem href="/contact">Contact</MenuItem>
        <MenuItem href="/products">Products</MenuItem>
        <MenuItem href="/help">Help</MenuItem>
        <MenuItem href="/login">Login</MenuItem>
        <MenuItem href="/register">Register</MenuItem>
      </Menu>
    </Container>
  );
};

export default HamburgerMenu;
