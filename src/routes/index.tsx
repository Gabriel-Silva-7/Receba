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

function AppRoutes() {
  const location = useLocation();
  console.log(window.innerWidth);
  return (
    <>
      <GlobalStyle />
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <>{window.innerWidth > 900 ? <NavBar /> : <HamburgerMenu />}</>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div />} />
        <Route path="/contact" element={<div />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/products" element={<ProductPage />} />
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
