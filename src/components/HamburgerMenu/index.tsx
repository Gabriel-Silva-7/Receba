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

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <MenuButton onClick={toggleMenu}>&#9776;</MenuButton>
      <Logo>Receba!</Logo>
      <SingInSignUpWrapper>
        <SignInSingUpButton href="/login">Login</SignInSingUpButton>
        <SignInSingUpButton href="/register">Sign Up</SignInSingUpButton>
      </SingInSignUpWrapper>
      <Menu open={open}>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/about">About</MenuItem>
        <MenuItem href="/services">Services</MenuItem>
        <MenuItem href="/contact">Contact</MenuItem>
      </Menu>
    </Container>
  );
};

export default HamburgerMenu;
