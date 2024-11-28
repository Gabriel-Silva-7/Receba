import React, { useState } from 'react';
import * as S from './styles';
// import logo from '../../assets/logo.png';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepHeader from './Components/StepsHeader';
import LoginInfo from './Components/LoginInfo';
import { CircularProgress, StepLabel } from '@mui/material';
import BasicInfoForm from './Components/BasicInfoForm';
import ResidenceInformation from './Components/ResidenceInformation';
import { API_URL } from '../../config/env';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import ErrorIcon from '@mui/icons-material/Error';
import { api } from '../../config/api';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';

const steps = [
  'Informações de login',
  'Informações Básicas',
  'Informações de residência',
];

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

const Signup: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loginData, setLoginData] = useState<any>(null);
  const [basicInfoData, setBasicInfoData] = useState<any>(null);
  const [UserInfo, setUserInfo] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    window.location.href = '/login';
  };

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const createUser = (data: any) => {
    if (isLoading) return;

    setIsLoading(true);
    api
      .post(`${API_URL}/createuser`, {
        loginData,
        basicInfoData,
        UserInfo,
        data,
      })
      .then(response => {
        if (response?.status === 201) {
          setOpen(true);
          setTimeout(() => {
            handleClose();
          }, 15000);
        }
      })
      .catch(error => {
        if (error?.response && error?.response?.status === 409) {
          setErrorMessage('Já existe uma conta associada a esse CPF.');
        } else {
          setErrorMessage(
            'Ocorreu um erro ao criar o usuário. Tente novamente.'
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const storeBasicInfoData = (data: any) => {
    setBasicInfoData(data);
    setActiveStep(2);
  };

  // const handleNext = () => {
  //   setActiveStep(prevActiveStep => prevActiveStep + 1);
  // };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const storeLoginData = (data: any) => {
    setLoginData(data);
    setActiveStep(1);
  };

  console.log(activeStep);

  return (
    <S.Container>
      {isLoading && (
        <S.LoadingOverlay>
          <CircularProgress />
        </S.LoadingOverlay>
      )}
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
      <S.FormContainer>
        <S.Title>Cadastre-se</S.Title>
        <S.Description>
          Cadastre-se no Receba! e aproveite a conveniência de receber suas
          encomendas a qualquer hora. Em parceria com condomínios, criamos
          lockers onde os moradores podem receber suas entregas sem a
          necessidade de estarem presentes ou depender de alguém para
          recebê-las.
        </S.Description>
        <S.StyledBoxStepper>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={() => (
                    <svg width="20" height="20">
                      <circle
                        cx="10"
                        cy="10"
                        r="10"
                        fill={index <= activeStep ? '#333333' : '#cccccc'}
                      />
                      <text
                        x="10"
                        y="15"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                        fontFamily="Arial"
                      >
                        {index + 1}
                      </text>
                    </svg>
                  )}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </S.StyledBoxStepper>
        {steps.map((label, index) => {
          const getStepContent = (stepIndex: number) => {
            switch (stepIndex) {
              case 0:
                return (
                  <LoginInfo
                    onSubmit={storeLoginData}
                    initialData={loginData}
                  />
                );
              case 1:
                return (
                  <BasicInfoForm
                    onSubmit={storeBasicInfoData}
                    backStep={handleBack}
                    initialData={basicInfoData}
                    setUserInfo={setUserInfo}
                    userInfo={UserInfo}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                  />
                );
              case 2:
                return (
                  <ResidenceInformation
                    onSubmit={createUser}
                    backStep={handleBack}
                    initialData={UserInfo}
                  />
                );
              default:
                return <div>Unknown step</div>;
            }
          };

          return (
            <S.FormWrapper
              key={label}
              style={{
                height: activeStep === index ? '100%' : '80px',
                overflow: 'hidden',
                transition: 'height 0.3s ease',
              }}
            >
              {activeStep === index ? (
                <>
                  <StepHeader
                    label={label}
                    index={index}
                    activeStep={activeStep}
                  />
                  <S.DescriptionForm>
                    {index === 0 &&
                      'Por favor, preencha suas informações de login.'}
                    {index === 1 &&
                      'Por favor, preencha suas informações básicas.'}
                    {index === 2 &&
                      'As informações de residência estão vinculadas ao CPF ou CNPJ dos residentes dos apartamentos informados pelo condomínio.'}
                  </S.DescriptionForm>
                  <S.Required>
                    * Todos os campos são obrigatórios, a menos que indicado de
                    outra forma.
                  </S.Required>
                  {getStepContent(index)}
                </>
              ) : (
                <StepHeader
                  label={label}
                  index={index}
                  activeStep={activeStep}
                />
              )}
            </S.FormWrapper>
          );
        })}
      </S.FormContainer>
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
            <h2>Usuário criado com sucesso!</h2>
            <p>Você será redirecionado para a página de login.</p>
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
            <h2>Erro ao criar usuário</h2>
            <p>{errorMessage}</p>
          </Box>
        </Box>
      </Modal>
    </S.Container>
  );
};

export default Signup;
