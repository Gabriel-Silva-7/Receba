import InputSelect from '../../components/Select';
import * as S from './styles';
import logo from '../../assets/fastBox.png';

import { api } from '../../config/api';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderMobile from './Components/HeaderNewPackage';
import CameraCapture from './Components/Camera';
import Checkbox from '@mui/material/Checkbox';
import { CircularProgress } from '@mui/material';

const NewPackage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idCondominio = params.get('idCondominio');
  const [blockOptions, setBlockOptions] = useState<any[]>([]);
  const [apartmentOptions, setApartmentOptions] = useState({
    value: '',
    label: '',
  });
  const [block, setBlock] = useState({ value: '', label: '' });
  const [size, setSize] = useState({ value: '', label: '' });
  const [apartment, setApartment] = useState({ value: '', label: '' });
  const [lockerNotBusy, setLockerNotBusy] = useState<any>();
  const [checked, setChecked] = useState(false);
  const [deliveryChecked, setDeliveryChecked] = useState(false);
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [historyId, setHistoryId] = useState<any>();
  // const [email, setEmail] = useState('');

  console.log(userId);

  const getBlocks = async () => {
    const response = await api.post('/getBlock', {
      idCondominio: idCondominio,
    });
    const blockOptions = response.data.map((block: any) => ({
      value: block.Bloco,
      label: block.Bloco,
    }));
    setBlockOptions(blockOptions);
  };

  const getApartments = async () => {
    const response = await api.post('/getApartment', {
      idCondominio: idCondominio,
      block: block.value,
    });
    const apartmentOptions = response.data.map((apartment: any) => ({
      value: apartment.Apartamento,
      label: apartment.Apartamento,
    }));
    setApartmentOptions(apartmentOptions);
  };

  const getIdUserPerAdress = async () => {
    const response = await api.post('/getUserPerAddress', {
      idCondominio: idCondominio,
      block: block.value,
      idApartment: apartment.value,
    });
    setUserId(response?.data[0]?.IdUsuario);
    // setEmail(response?.data[0]?.Email);
  };

  const getLockerNotBusy = async () => {
    setLoading(true);
    const response = await api.post('/getLockerNotBusy', {
      idCondominio: idCondominio,
      tamanho: size.value,
    });
    console.log(response.data.lockersNotBusy[0]);
    setLockerNotBusy(response.data.lockersNotBusy[0]);
    setLoading(false);
  };

  const OpenLocker = async () => {
    console.log('Abrindo locker');
    setLoading(true);
    await api
      .post('/updateLocker', {
        idLocker: lockerNotBusy.IdLocker,
        status: '1',
        idUser: userId,
      })
      .then(async () => {
        nextStep();
        await CreateLockerHistory();
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const CloseLocker = async () => {
    setLoading(true);
    console.log('Fechando locker');
    await api
      .post('/updateLocker', {
        idLocker: lockerNotBusy.IdLocker,
        status: '0',
        idUser: userId,
      })
      .then(async response => {
        console.log(response);
        nextStep();
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // const SendEmail = async () => {
  //   await api.post('/sendEmail', {
  //     to: email,
  //     subject: 'Nova encomenda aguardando retirada',
  //     text: 'Olá! Sua encomenda está disponível para retirada no locker. Acesse o Receba! para mais informações.',
  //   });
  // };

  const CreateLockerHistory = async () => {
    await api
      .post('/createLockerHistory', {
        idLocker: lockerNotBusy.IdLocker,
        IdUsuario: userId,
      })
      .then(response => {
        setHistoryId(response.data[0].IdHistorico);
        // SendEmail();
        console.log('Histórico criado');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getFaseLockerAndLock = async () => {
    const response = await api
      .post('/getFaseLocker', {
        IdHistorico: historyId,
      })
      .then(response => {
        response?.data?.Fase === 'Entrega' ? CloseLocker() : nextStep();
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    return response;
  };

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleCheckboxDeliveryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryChecked(event.target.checked);
  };

  useEffect(() => {
    getBlocks();
  }, []);

  useEffect(() => {
    if (block.value) {
      getApartments();
    }
  }, [block]);

  useEffect(() => {
    getLockerNotBusy();
    if (apartment && size && block) getIdUserPerAdress();
  }, [apartment, size, block]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <S.TextWrapper>
              <S.Title>Passo 1.</S.Title>
              <S.Description>
                Selecione o tamanho do locker e o apartamento da entrega.
              </S.Description>
            </S.TextWrapper>
            <S.InputWrapper>
              <InputSelect
                options={[{ value: 'G', label: 'G' }]}
                title="Tamanho:"
                onChange={(value: any) => {
                  setSize(value);
                }}
                value={size}
              />
              <InputSelect
                options={blockOptions}
                title="Bloco:"
                onChange={(value: any) => {
                  setBlock(value);
                }}
                value={block}
              />
              <InputSelect
                options={apartmentOptions}
                title="Apartamento:"
                onChange={(value: any) => {
                  setApartment(value);
                }}
                value={apartment}
              />
              {(!loading && !(size.value?.length >= 1)) ||
                (!lockerNotBusy?.IdLocker && (
                  <S.ErrorMessage>
                    Não há lockers disponíveis no momento. Por favor, tente
                    novamente mais tarde.
                  </S.ErrorMessage>
                ))}
            </S.InputWrapper>
            <S.ButtonNext
              disabled={
                !(apartment.value?.length >= 1) ||
                !(block.value?.length >= 1) ||
                !(size.value?.length >= 1) ||
                !lockerNotBusy?.IdLocker
              }
              onClick={nextStep}
            >
              Avançar para entrega
            </S.ButtonNext>
          </>
        );
      case 2:
        return (
          <>
            <S.TextWrapper>
              <S.Title>Passo 2.</S.Title>
              <S.Description>
                Encontramos o locker perfeito para você! Prepare-se para
                entregar a encomenda no:
              </S.Description>
            </S.TextWrapper>
            <S.BoxLockerNumber>
              Locker{' '}
              {lockerNotBusy &&
                lockerNotBusy.IdLocker.toString().padStart(2, '0')}
            </S.BoxLockerNumber>
            <S.FormControlWrapper>
              <S.StyledFormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleCheckboxChange} />
                }
                label={
                  <span
                    style={{
                      color: '#333',
                      textAlign: 'justify',
                      fontFamily: 'Roboto',
                      fontSize: '13px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                    }}
                  >
                    Confirmo que encontrei o locker e estou ciente que após
                    abertura terei um prazo de 2 minutos para finalizar a
                    entrega.
                  </span>
                }
              />
            </S.FormControlWrapper>
            <S.ButtonUnlock
              style={{ marginBottom: 50 }}
              onClick={OpenLocker}
              disabled={!checked}
            >
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
          </>
        );
      case 3:
        return (
          <>
            <S.TextWrapper>
              <S.Title>Passo 3.</S.Title>
              <S.Description>
                Para sua segurança e de quem recebe, anexe uma foto da encomenda
                no locker e finalize a entrega fechando a porta do locker
                indicado.
              </S.Description>
            </S.TextWrapper>
            <S.InputWrapper>
              <CameraCapture />
              <S.StyledFormControlLabel
                control={
                  <Checkbox
                    checked={deliveryChecked}
                    onChange={handleCheckboxDeliveryChange}
                  />
                }
                label={
                  <span
                    style={{
                      color: '#333',
                      textAlign: 'justify',
                      fontFamily: 'Roboto',
                      fontSize: '13px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                    }}
                  >
                    Confirmo que efetuei a entrega da encomenda e fechei a porta
                    do locker indicado.
                  </span>
                }
              />
            </S.InputWrapper>
            <S.ButtonLock
              disabled={!deliveryChecked}
              onClick={async () => {
                await getFaseLockerAndLock();
              }}
            >
              Finalizar entrega{' '}
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
          </>
        );
      case 4:
        return (
          <S.SucessMessageWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
              viewBox="0 0 170 170"
              fill="none"
            >
              <g clip-path="url(#clip0_304_1684)">
                <path
                  d="M85 170C107.543 170 129.163 161.045 145.104 145.104C161.045 129.163 170 107.543 170 85C170 62.4566 161.045 40.8365 145.104 24.8959C129.163 8.95533 107.543 0 85 0C62.4566 0 40.8365 8.95533 24.8959 24.8959C8.95533 40.8365 0 62.4566 0 85C0 107.543 8.95533 129.163 24.8959 145.104C40.8365 161.045 62.4566 170 85 170ZM122.52 69.3945L80.0195 111.895C76.8984 115.016 71.8516 115.016 68.7637 111.895L47.5137 90.6445C44.3926 87.5234 44.3926 82.4766 47.5137 79.3887C50.6348 76.3008 55.6816 76.2676 58.7695 79.3887L74.375 94.9941L111.23 58.1055C114.352 54.9844 119.398 54.9844 122.486 58.1055C125.574 61.2266 125.607 66.2734 122.486 69.3613L122.52 69.3945Z"
                  fill="#0B851D"
                />
              </g>
              <defs>
                <clipPath id="clip0_304_1684">
                  <rect width="170" height="170" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <S.TitleSucess>Pronto!</S.TitleSucess>
            <S.DescriptionSucess>
              Confira se o locker está fechado e pronto: entrega finalizada!
              Obrigado por utilizar nossos serviços. Até a próxima!
            </S.DescriptionSucess>
            <S.NewDeliveryButton onClick={() => window.location.reload()}>
              Realizar nova entrega
            </S.NewDeliveryButton>
          </S.SucessMessageWrapper>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <S.LoadingContainer>
        <CircularProgress />
      </S.LoadingContainer>
    );
  }

  return (
    <S.Container>
      <HeaderMobile setStep={setStep} step={step} />
      {step !== 4 && (
        <S.ImgWrapper>
          <S.Img src={logo} alt="FastBox" />
        </S.ImgWrapper>
      )}
      {renderStep()}
    </S.Container>
  );
};

export default NewPackage;
