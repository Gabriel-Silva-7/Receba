import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  & > a {
    color: black;
    text-decoration: none;
    font-size: 1rem;

    &.active {
      font-weight: bold;
    }

    &:hover {
      border-bottom: 2px solid #000;
    }
  }
`;
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const ButtonWithoutBackground = styled.button`
  background: transparent !important;
  border: none;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <h3>Receba!</h3>
      <NavList>
        <NavItem>
          <NavLink to="/" end>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/products">Produtos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/partners">Parceiros</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/help">Ajuda</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">Sobre</NavLink>
        </NavItem>
      </NavList>
      <Profile>
        <ButtonWithoutBackground>Entrar</ButtonWithoutBackground>
        <ButtonWithoutBackground>Cadastro</ButtonWithoutBackground>
      </Profile>
    </NavBarContainer>
  );
}

export default NavBar;
