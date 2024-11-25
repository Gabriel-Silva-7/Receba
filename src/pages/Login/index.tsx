import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import arrow from '../../assets/arrow.svg';
import hide from '../../assets/hide.svg';
import { API_URL } from '../../config/env';
import { api } from '../../config/api';
import { useAuth } from '../../context/AuthContext';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import terms from '../../../public/Terms.pdf';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const [openStack, setOpenStack] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await api
      .post(`${API_URL}/login`, { email, password })
      .then(response => {
        login(response.data.token);
        navigate('/');
      })
      .catch(error => {
        console.error('Error logging in:', error);
        setOpenStack(true);
        setError(true);
      });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setOpenStack(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <S.LoginContainer>
      <Snackbar
        open={openStack}
        autoHideDuration={6000}
        onClose={() => setOpenStack(false)}
        message="Email ou senha incorretos"
        action={action}
      />
      <S.HeaderNav>
        <S.BackArrow onClick={() => navigate('/')}>
          <img src={arrow} />
        </S.BackArrow>
        <h3
          onClick={() => (window.location.href = '/')}
          style={{ cursor: 'pointer' }}
        >
          Receba!
        </h3>
      </S.HeaderNav>
      <S.Divider />
      <S.Form onSubmit={handleLogin}>
        <S.Title>Login</S.Title>
        <S.FormGroup>
          <S.Label htmlFor="email">E-mail:</S.Label>
          <S.Input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.LabelContainer>
            <S.Label htmlFor="password">Senha:</S.Label>
            <S.ToggleButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={hide} />
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </S.ToggleButton>
          </S.LabelContainer>
          <S.Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <S.Error>Email ou senha incorretos</S.Error>}
        </S.FormGroup>
        <S.FormGroup>
          <S.CheckboxContainer>
            <S.Checkbox type="checkbox" id="rememberMe" />
            <S.Label htmlFor="rememberMe">Lembrar de mim</S.Label>
          </S.CheckboxContainer>
        </S.FormGroup>
        <S.TermsAndConditions>
          Para continuar, você aceita os{' '}
          <a
            href="../../../public/Terms.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Termos de uso
          </a>{' '}
          e{' '}
          <a
            href="../../../public/Terms.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Politica de Privacidade
          </a>
          .
        </S.TermsAndConditions>
        <S.Button
          type="submit"
          style={{ opacity: email && password.length >= 6 ? 1 : 0.25 }}
        >
          Log in
        </S.Button>
        <S.LinkSignUp>
          Não tem uma conta?{' '}
          <a onClick={() => navigate('/register')}>Cadastre-se</a>
        </S.LinkSignUp>
      </S.Form>
    </S.LoginContainer>
  );
};

export default Login;
