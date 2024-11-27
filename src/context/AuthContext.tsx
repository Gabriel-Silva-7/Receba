import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  email: string;
  exp: number;
  nome: string;
  userId: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  email: string | undefined;
  name: string | undefined;
  userId: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );

  const [email, setEmail] = useState<any>();
  const [name, setName] = useState<any>();
  const [userId, setUserId] = useState<any>();
  const decodedToken = token ? jwtDecode<DecodedToken>(token) : null;

  const initialAuthState = () => {
    if (token) {
      try {
        if (decodedToken && decodedToken.exp) {
          setEmail(decodedToken?.email);
          setName(decodedToken?.nome);
          setUserId(decodedToken?.userId);
          const expirationDate = new Date(decodedToken.exp * 1000);
          if (expirationDate <= new Date()) {
            logout();
            return false;
          }
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    } else {
      return false;
    }
  };

  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean>(initialAuthState);

  useEffect(() => {
    if (token && decodedToken) {
      try {
        setEmail(decodedToken?.email);
        setName(decodedToken?.nome);
        setUserId(decodedToken?.userId);
        if (decodedToken.exp) {
          const expirationDate = new Date(decodedToken.exp * 1000);
          if (expirationDate <= new Date()) {
            logout();
          }
        }
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  const login = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, login, logout, email, name, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
