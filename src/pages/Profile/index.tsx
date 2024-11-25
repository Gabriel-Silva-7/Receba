import { useEffect, useState } from 'react';
import * as S from './styles';
import { useAuth } from '../../context/AuthContext';
import fotoTeste from '../../assets/fototeste.svg';
import { api } from '../../config/api';

const Profile = () => {
  const [userHasImage] = useState(true);
  const { name, email } = useAuth();

  interface User {
    Nome: string;
    Endereco: string;
    Celular: string;
  }

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const getProfileInfo = async () => {
    setLoading(true);
    try {
      const response = await api.post('/userDetails', {
        email: email,
      });
      setUser(response.data.userDetails[0]);
    } catch (error) {
      console.error('Error fetching profile info:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      await api.post('/updateUser', {
        email: email,
        nome: user?.Nome,
        cel: user?.Celular,
      });
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  if (loading) {
    return (
      <S.LoadingContainer>
        <S.LoadingSpinner />
      </S.LoadingContainer>
    );
  }

  return (
    <S.Container>
      <S.User>
        {userHasImage ? <S.UserImg src={fotoTeste} /> : <S.LogoWrapper />}
        <S.TextWrapper>
          <S.UserName>
            Olá, {(name && name.split(' ')[0]) || 'Usuário.'}!
          </S.UserName>
          <S.DescriptionText>
            Aqui você confere seus dados cadastrais
          </S.DescriptionText>
        </S.TextWrapper>
      </S.User>
      <S.Form>
        <S.FormGroup>
          <S.Label htmlFor="fullName">Nome Completo</S.Label>
          <S.Input
            placeholder="Nome Completo"
            type="text"
            value={user?.Nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser({
                ...user,
                Nome: e.target.value,
                Endereco: user?.Endereco || '',
                Celular: user?.Celular || '',
              })
            }
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="address">Endereço</S.Label>
          <S.Input
            placeholder="Endereço"
            type="text"
            id="address"
            name="address"
            value={user?.Endereco}
            disabled
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input
            value={email}
            disabled
            placeholder="Email"
            type="email"
            id="email"
            name="email"
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="phone">Telefone</S.Label>
          <S.Input
            value={user?.Celular}
            placeholder="Celular"
            type="cel"
            id="phone"
            name="phone"
          />
        </S.FormGroup>
      </S.Form>
      <S.Button onClick={updateProfile}>Atualizar informações</S.Button>
    </S.Container>
  );
};

export default Profile;
