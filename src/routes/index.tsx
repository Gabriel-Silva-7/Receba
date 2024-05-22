import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../NavBar';
import GlobalStyle from '../styles';

function AppRoutes() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
