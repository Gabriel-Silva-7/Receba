import React, { useState } from 'react';
import * as S from './styles';
// import logo from '../../assets/logo.png';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';

const steps = ['Basic info', 'Contact info', 'Login info'];

const Signup: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{' '}
        </S.Description>
        <Box sx={{ width: '759px', mt: 4, mb: 4 }}>
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
        </Box>
        {steps.map((label, index) => (
          <S.FormWrapper
            key={label}
            style={{
              height: activeStep === index ? '765px' : '100px',
              overflow: 'hidden',
              transition: 'height 0.3s ease',
            }}
          >
            {activeStep === index ? (
              <div>
                <h2>{label}</h2>
                <p>Form content for {label}</p>
                <button
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                >
                  Next
                </button>
                <button onClick={handleBack} disabled={activeStep === 0}>
                  Back
                </button>
              </div>
            ) : (
              <h2>{label}</h2>
            )}
          </S.FormWrapper>
        ))}
      </S.FormContainer>
    </S.Container>
  );
};

export default Signup;
