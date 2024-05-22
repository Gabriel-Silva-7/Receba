import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../NavBar';
import GlobalStyle from '../styles';
import ProductPage from '../pages/Products';

function AppRoutes() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div />} />
        <Route path="/contact" element={<div />} />
        <Route path="/login" element={<div />} />
        <Route path="/register" element={<div />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
