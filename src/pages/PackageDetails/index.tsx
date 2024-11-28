import { useLocation } from 'react-router-dom';
import HeaderMobile from '../../components/HeaderMyPackages';
import * as S from './styles';
import ClosedBox from '../../assets/ClosedBoxBig.png';
import OpenBox from '../../assets/OpenBoxBig.png';
import Checkbox from '@mui/material/Checkbox';
import { api } from '../../config/api';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Box, CircularProgress, Modal } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const PackageDetails = () => {
  const location = useLocation();
  const [awarenessChecked, setAwarenessChecked] = useState(false);
  const { idLocker, idHistorico } = location.state || {};
  console.log(location.state);
  const { userId, email } = useAuth();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [retirado, setRetirado] = useState<any>([]);
  const [recebido, setRecebido] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  console.log(data);

  const verifyHistoryLocker = async () => {
    try {
      const response = await api.post('/getLockerHistory', {
        email: email,
      });
      setLoading(true);
      setData(response.data);
      console.log(response.data);
      const filteredData = response.data.filter(
        (item: any) => item.IdHistorico === idHistorico
      );
      setRetirado(filteredData[0].DataHoraRetirada);
      setRecebido(filteredData[0].DataHoraEntrega);
      console.log(filteredData);
      setLoading(false);
    } catch (error) {
      console.error('Error verifying locker:', error);
    }
  };

  const unlockLocker = async () => {
    await api
      .post('/updateLocker', {
        idLocker: idLocker,
        status: 1,
        idUser: '',
      })
      .then(async () => {
        await updateHistoryLocker();
      });
  };

  const updateHistoryLocker = async () => {
    await api
      .post('/updateLockerHistory', {
        IdLocker: idLocker,
        IdHistorico: idHistorico,
        IdUsuario: userId,
      })
      .then(() => {
        setOpen(true);
      });
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
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

  useEffect(() => {
    verifyHistoryLocker();
  }, [location.state]);

  useEffect(() => {
    verifyHistoryLocker();
  }, []);

  if (loading)
    return (
      <S.Container>
        {window.screen.width < 768 && (
          <HeaderMobile title="Retirar Encomenda" />
        )}
        <S.LoadingContainer>
          <CircularProgress />
        </S.LoadingContainer>
      </S.Container>
    );

  return (
    <S.Container>
      {window.screen.width < 768 && <HeaderMobile title="Retirar Encomenda" />}
      <S.BoxLogoContainer>
        <S.BoxLogoWrapper>
          {retirado ? (
            <img src={OpenBox} />
          ) : (
            <img src={ClosedBox} alt="Locker" />
          )}
        </S.BoxLogoWrapper>
      </S.BoxLogoContainer>
      <S.TextWrapper>
        <S.LabelTitle>
          {retirado ? 'Encomenda já retirada no:' : 'Encomenda no:'}
        </S.LabelTitle>
        <S.LabelDescription>Locker {idLocker}</S.LabelDescription>
      </S.TextWrapper>
      <S.TextWrapper>
        <S.LabelTitle>Recebido:</S.LabelTitle>
        <S.LabelDescription>
          {new Date(recebido).toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}{' '}
          às{' '}
          {new Date(recebido).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </S.LabelDescription>
      </S.TextWrapper>
      {!retirado && (
        <>
          <S.CheckboxWrapper>
            <S.WrapperCheckbox>
              <Checkbox
                id="awareness"
                name="awareness"
                onChange={e => setAwarenessChecked(e.target.checked)}
              />
              <label htmlFor="awareness">
                Estou ciente que após desbloquear o locker terei um prazo de 2
                minutos para retirada da encomenda.
              </label>
            </S.WrapperCheckbox>
          </S.CheckboxWrapper>
          <S.ButtonWrapper>
            <S.UnlockLockerButton
              onClick={unlockLocker}
              disabled={!awarenessChecked}
            >
              Desbloquear locker
            </S.UnlockLockerButton>
          </S.ButtonWrapper>
        </>
      )}
      {retirado && (
        <S.TextWrapper>
          <S.LabelTitle>Retirado:</S.LabelTitle>
          <S.LabelDescription>
            {new Date(retirado).toLocaleString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}{' '}
            às{' '}
            {new Date(retirado).toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </S.LabelDescription>
        </S.TextWrapper>
      )}
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
            width={'80%'}
          >
            <CheckCircleIcon
              style={{ color: 'green', fontSize: 50, marginBottom: 10 }}
            />
            <h2>Seu locker será desbloqueado em até 15 segundos.</h2>
          </Box>
        </Box>
      </Modal>
    </S.Container>
  );
};

export default PackageDetails;
