import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
import GlobalStyle from '../styles';
import ProductPage from '../pages/Products';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import HamburgerMenu from '../components/HamburgerMenu';
import Dashboard from '../pages/Dashboard';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

function AppRoutes() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [loggedIn, setLoggedIn] = useState(isAuthenticated);

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
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div />} />
            <Route path="/contact" element={<div />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/products" element={<ProductPage />} />
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
