import React, { useState } from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';

const steps = ['Basic info', 'Contact info', 'Login info'];

const Signup: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <S.Container>
      <S.HeaderNav>
        <h3>Receba!</h3>
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
        <S.FormWrapper></S.FormWrapper>
      </S.FormContainer>
    </S.Container>
  );
};

export default Signup;
