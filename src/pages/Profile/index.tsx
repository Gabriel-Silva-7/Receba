import { useEffect, useState } from 'react';
import * as S from './styles';
import { useAuth } from '../../context/AuthContext';
import { api } from '../../config/api';
import { Box, Modal } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';

interface User {
  Nome: string;
  Endereco: string;
  Celular: string;
  Imagem: string;
}

const Profile = () => {
  const [userHasImage] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { name, email, userId } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const getProfileInfo = async () => {
    setLoading(true);
    try {
      const response = await api.post('/userDetails', {
        email: email,
      });
      console.log(response.data.userDetails[0]);
      setUser(response.data.userDetails[0]);
    } catch (error) {
      console.error('Error fetching profile info:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      await api
        .post('/updateUser', {
          email: email,
          nome: user?.Nome,
          cel: user?.Celular,
        })
        .then(() => {
          sendNewImage();
          setOpen(true);
        });
    } catch (error) {
      setErrorMessage('Erro ao atualizar informações do usuário');
      console.error('Error updating profile:', error);
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${window.innerWidth > 768 ? '45%' : '90%'}`,
    height: '25%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: `${window.innerWidth > 768 ? 4 : 3}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '16px',
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  if (loading) {
    return (
      <S.LoadingContainer>
        <S.LoadingSpinner />
      </S.LoadingContainer>
    );
  }

  const sendNewImage = async () => {
    const response = await api.post('/saveuserimage', {
      base64Image: image,
      userId: userId,
    });
    console.log(response);
  };

  return (
    <S.Container>
      <S.User>
        {userHasImage ? <S.UserImg src={user?.Imagem} /> : <S.LogoWrapper />}
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
                Imagem: user?.Imagem || '',
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
          <S.UploadButton>
            <S.Label>Atualize a foto de perfil</S.Label>
            <input
              type="file"
              accept="image/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImage(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </S.UploadButton>
        </S.FormGroup>
      </S.Form>
      <S.Button onClick={updateProfile}>Atualizar informações</S.Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...modalStyle }}>
          <Box
            position="absolute"
            top={0}
            right={0}
            p={1}
            sx={{ cursor: 'pointer' }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <CheckCircleIcon
              style={{ color: 'green', fontSize: 50, marginBottom: 10 }}
            />
            <h2>Usuário atualizado com sucesso!</h2>
          </Box>
        </Box>
      </Modal>
      <Modal open={!!errorMessage} onClose={() => setErrorMessage(null)}>
        <Box sx={{ ...modalStyle }}>
          <Box
            position="absolute"
            top={0}
            right={0}
            p={1}
            sx={{ cursor: 'pointer' }}
            onClick={() => setErrorMessage(null)}
          >
            <CloseIcon />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <ErrorIcon
              style={{ color: 'red', fontSize: 50, marginBottom: 10 }}
            />
            <h2>Erro ao atualizar usuário</h2>
            <p>{errorMessage}</p>
          </Box>
        </Box>
      </Modal>
    </S.Container>
  );
};

export default Profile;
