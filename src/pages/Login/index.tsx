import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
    <S.LoginContainer>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
          <S.Label htmlFor="password">Password:</S.Label>
          <S.Input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </S.FormGroup>
        <S.Button type="submit">Login</S.Button>
      </form>
    </S.LoginContainer>
  );
};

export default Login;
