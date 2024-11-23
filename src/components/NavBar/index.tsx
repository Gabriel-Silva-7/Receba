import { NavLink } from 'react-router-dom';
import {
  ButtonWithoutBackground,
  NavBarContainer,
  NavItem,
  NavList,
  Profile,
} from './styles';
import { useAuth } from '../../context/AuthContext';

function NavBar() {
  const { isAuthenticated } = useAuth();
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
          <NavLink to="/about">Sobre</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/help">Ajuda</NavLink>
        </NavItem>
      </NavList>
      <Profile>
        {isAuthenticated ? (
          <ButtonWithoutBackground onClick={() => (window.location.href = '/')}>
            Minhas Encomendas
          </ButtonWithoutBackground>
        ) : (
          <>
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
          </>
        )}
      </Profile>
    </NavBarContainer>
  );
}

export default NavBar;
