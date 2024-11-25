import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
import GlobalStyle from '../styles';
import ProductPage from '../pages/Products';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import HamburgerMenu from '../components/HamburgerMenu';
import HomeLogged from '../pages/homeLoggedIn';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import LateralMenu from '../components/LateralMenu';
import HeaderMobile from '../components/HeaderMobile';
import MyPackages from '../pages/Packages';
import PackageDetails from '../pages/PackageDetails';
import HeaderDesktop from '../components/HeaderDesktopLogged';

function AppRoutes() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [loggedIn, setLoggedIn] = useState(isAuthenticated);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <>
      <GlobalStyle />
      {location.pathname !== '/login' &&
        location.pathname !== '/register' &&
        !loggedIn && (
          <>{window.innerWidth > 900 ? <NavBar /> : <HamburgerMenu />}</>
        )}
      {loggedIn &&
        location.pathname !== '/mypackages' &&
        location.pathname !== '/packagedetails' && (
          <>
            <HeaderMobile setMenuIsOpen={setIsOpen} isOpen={isOpen} />
            <LateralMenu setMenuIsOpen={setIsOpen} isOpen={isOpen} />
          </>
        )}
      {loggedIn &&
        (location.pathname === '/mypackages' ||
          location.pathname === '/packagedetails') &&
        window.screen.width > 900 && (
          <>
            <HeaderDesktop setMenuIsOpen={setIsOpen} isOpen={isOpen} />
            <LateralMenu setMenuIsOpen={setIsOpen} isOpen={isOpen} />
          </>
        )}
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/" element={<HomeLogged />} />
            <Route path="/mypackages" element={<MyPackages />} />
            <Route path="/packagedetails" element={<PackageDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div />} />
            <Route path="/contact" element={<div />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
