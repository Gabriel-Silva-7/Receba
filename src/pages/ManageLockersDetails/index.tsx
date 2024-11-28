import { useState } from 'react';
import * as S from './styles';
import condominio from '../../assets/condominio.jpg';
import { useLocation } from 'react-router-dom';
import { api } from '../../config/api';
import { Box, Modal } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const ManageLockersDetails = () => {
  const [userHasImage] = useState(true);
  const [open, setOpen] = useState(false);
  const [textReturn, setTextReturn] = useState('');
  const [textDescription, setTextDescription] = useState('');

  const location = useLocation();
  const { locker } = location.state;

  const unlockLocker = async () => {
    await api
      .post('/updateLocker', {
        idLocker: locker?.IdLocker,
        status: 1,
        idUser: '',
      })
      .then(async response => {
        setOpen(true);
        setTextReturn('Locker abrindo...');
        setTextDescription('O locker será aberto em até 15 segundos');
        console.log(response.data);
      });
  };

  const lockLocker = async () => {
    await api
      .post('/updateLocker', {
        idLocker: locker?.IdLocker,
        status: 0,
        idUser: '',
      })
      .then(async response => {
        setOpen(true);
        setTextReturn('Locker fechando...');
        setTextDescription('O locker será trancado em até 15 segundos!');
        console.log(response.data);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <S.Container>
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
            <h2>{textReturn}</h2>
            <p>{textDescription}</p>
          </Box>
        </Box>
      </Modal>
      <S.User>
        {userHasImage ? <S.UserImg src={condominio} /> : <S.LogoWrapper />}
        <S.UserName>{locker?.Condominio || 'Condominio.'}</S.UserName>
      </S.User>
      <S.LockersWrapper>
        <S.LockerTitle>Locker {locker?.IdLocker}</S.LockerTitle>
      </S.LockersWrapper>
      <S.ButtonsWrapper>
        <S.ButtonUnlock onClick={unlockLocker}>
          Abrir Locker{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
          >
            <path
              d="M14.6667 6.1875C14.6667 4.28828 16.1583 2.75 18 2.75C19.8417 2.75 21.3333 4.28828 21.3333 6.1875V8.25C21.3333 9.01055 21.9292 9.625 22.6667 9.625C23.4042 9.625 24 9.01055 24 8.25V6.1875C24 2.77148 21.3125 0 18 0C14.6875 0 12 2.77148 12 6.1875V8.25H2.66667C1.19583 8.25 0 9.4832 0 11V19.25C0 20.7668 1.19583 22 2.66667 22H16C17.4708 22 18.6667 20.7668 18.6667 19.25V11C18.6667 9.4832 17.4708 8.25 16 8.25H14.6667V6.1875Z"
              fill="white"
            />
          </svg>
        </S.ButtonUnlock>
        <S.ButtonLock onClick={lockLocker}>
          Trancar Locker{' '}
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.71429 7.875V10.5H16.2857V7.875C16.2857 5.45781 14.3679 3.5 12 3.5C9.63214 3.5 7.71429 5.45781 7.71429 7.875ZM4.28571 10.5V7.875C4.28571 3.52734 7.74107 0 12 0C16.2589 0 19.7143 3.52734 19.7143 7.875V10.5H20.5714C22.4625 10.5 24 12.0695 24 14V24.5C24 26.4305 22.4625 28 20.5714 28H3.42857C1.5375 28 0 26.4305 0 24.5V14C0 12.0695 1.5375 10.5 3.42857 10.5H4.28571Z"
              fill="white"
            />
          </svg>
        </S.ButtonLock>
      </S.ButtonsWrapper>
    </S.Container>
  );
};

export default ManageLockersDetails;
