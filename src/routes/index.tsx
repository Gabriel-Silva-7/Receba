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
import Profile from '../pages/Profile';
import NewPackage from '../pages/NewPackage';
import Help from '../pages/Help';
import ManageLockers from '../pages/ManageLockers';
import ManageLockersDetails from '../pages/ManageLockersDetails';
import RegisterResident from '../pages/RegisterResident';
import About from '../pages/About';
import UpdateResident from '../pages/UpdateResident';

const ConditionalNavBar = ({
  loggedIn,
  location,
}: {
  loggedIn: boolean;
  location: { pathname: string };
}) => {
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  if (!loggedIn) {
    return window.innerWidth > 900 ? <NavBar /> : <HamburgerMenu />;
  }

  return null;
};

const ConditionalHeader = ({
  loggedIn,
  location,
  setIsOpen,
  isOpen,
}: {
  loggedIn: boolean;
  location: { pathname: string };
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  if (!loggedIn) {
    return null;
  }

  if (
    location.pathname !== '/mypackages' &&
    location.pathname !== '/packagedetails'
  ) {
    return (
      <>
        <HeaderMobile setMenuIsOpen={setIsOpen} isOpen={isOpen} />
        <LateralMenu setMenuIsOpen={setIsOpen} isOpen={isOpen} />
      </>
    );
  }

  if (window.screen.width > 900) {
    return (
      <>
        <HeaderDesktop setMenuIsOpen={setIsOpen} isOpen={isOpen} />
        <LateralMenu setMenuIsOpen={setIsOpen} isOpen={isOpen} />
      </>
    );
  }

  return null;
};

function AppRoutes() {
  const location = useLocation();
  const { isAuthenticated, token, isAdmin } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [isAuthenticated, token]);

  return (
    <>
      <GlobalStyle />
      <ConditionalNavBar loggedIn={isAuthenticated} location={location} />
      <ConditionalHeader
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        loggedIn={isAuthenticated}
        location={location}
      />
      {loading ? (
        <></>
      ) : (
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<HomeLogged />} />
              <Route path="/mypackages" element={<MyPackages />} />
              <Route path="/packagedetails" element={<PackageDetails />} />
              <Route path="/profile" element={<Profile />} />
              {isAdmin && (
                <>
                  <Route
                    path="/registerresident"
                    element={<RegisterResident />}
                  />
                  <Route path="/managerlockers" element={<ManageLockers />} />
                  <Route
                    path="/detailsmanagelockers"
                    element={<ManageLockersDetails />}
                  />
                  <Route path="/updateResident" element={<UpdateResident />} />
                </>
              )}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/newpackage" element={<NewPackage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
          <Route path="/help" element={<Help />} />
        </Routes>
      )}
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
