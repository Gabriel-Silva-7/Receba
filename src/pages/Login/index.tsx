import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import arrow from '../../assets/arrow.svg';
import hide from '../../assets/hide.svg';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
    <S.LoginContainer>
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
        <S.Title>Log in</S.Title>
        <S.FormGroup>
          <S.Label htmlFor="email">Email:</S.Label>
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
            <S.Label htmlFor="password">Password:</S.Label>
            <S.ToggleButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={hide} />
              {showPassword ? 'Hide' : 'Show'}
            </S.ToggleButton>
          </S.LabelContainer>
          <S.Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.CheckboxContainer>
            <S.Checkbox
              type="checkbox"
              id="rememberMe"
              onChange={e => {
                if (e.target.checked) {
                  localStorage.setItem('email', email);
                  localStorage.setItem('password', password);
                } else {
                  localStorage.removeItem('email');
                  localStorage.removeItem('password');
                }
              }}
            />
            <S.Label htmlFor="rememberMe">Remember me</S.Label>
          </S.CheckboxContainer>
        </S.FormGroup>
        <S.TermsAndConditions>
          By continuing, you agree to the{' '}
          <a href="/terms-of-use" target="_blank" rel="noopener noreferrer">
            Terms of use
          </a>{' '}
          and{' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </S.TermsAndConditions>
        <S.Button type="submit">Log in</S.Button>
        <S.LinkSignUp>
          Don’t have an account?{' '}
          <a onClick={() => navigate('/register')}>Sign up</a>
        </S.LinkSignUp>
      </S.Form>
    </S.LoginContainer>
  );
};

export default Login;
