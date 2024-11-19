import { NavLink } from 'react-router-dom';
import {
  ButtonWithoutBackground,
  NavBarContainer,
  NavItem,
  NavList,
  Profile,
} from './styles';

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
        <ButtonWithoutBackground
          onClick={() => (window.location.href = '/login')}
        >
          Entrar
        </ButtonWithoutBackground>
        <ButtonWithoutBackground
          onClick={() => (window.location.href = '/register')}
        >
          Cadastro
        </ButtonWithoutBackground>
      </Profile>
    </NavBarContainer>
  );
}

export default NavBar;
