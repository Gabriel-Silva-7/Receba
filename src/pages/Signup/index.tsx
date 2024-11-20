import React, { useState } from 'react';
import * as S from './styles';
// import logo from '../../assets/logo.png';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepHeader from './Components/StepsHeader';
import LoginInfo from './Components/LoginInfo';
import { StepLabel } from '@mui/material';
import BasicInfoForm from './Components/BasicInfoForm';
import ResidenceInformation from './Components/ResidenceInformation';

const steps = [
  'Informações de login',
  'Informações Básicas',
  'Informações de residência',
];

const Signup: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleFormSubmit = (data: any) => {
    console.log(data);
    handleNext();
  };

  const storeLoginData = (data: any) => {
    const encryptedData = btoa(JSON.stringify(data));
    localStorage.setItem('loginData', encryptedData);
    handleNext();
  };

  return (
    <S.Container>
      <S.HeaderNav>
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
                return <LoginInfo onSubmit={storeLoginData} />;
              case 1:
                return <BasicInfoForm onSubmit={handleFormSubmit} />;
              case 2:
                return <ResidenceInformation onSubmit={handleFormSubmit} />;
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
                      'As informações de residência estão vinculadas ao CPF ou CNPJ dos residentes dos apartamentos informados pelo condomínio. Caso o vínculo não seja confirmado, será necessária uma aprovação do condomínio ou do condômino (no e-mail informado pelo condomínio que estiver como morador ou proprietário).'}
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
    </S.Container>
  );
};

export default Signup;
