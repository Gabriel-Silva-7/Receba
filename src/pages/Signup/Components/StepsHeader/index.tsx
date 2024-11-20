import React from 'react';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

interface StepHeaderProps {
  label: string;
  index: number;
  activeStep: number;
}

const StepHeader: React.FC<StepHeaderProps> = ({
  label,
  index,
  activeStep,
}) => {
  return (
    <h2>
      <Step key={label}>
        <StepLabel
          StepIconComponent={() => (
            <svg width="24" height="24">
              <circle
                cx="12"
                cy="12"
                r="12"
                fill={index <= activeStep ? '#333333' : '#cccccc'}
              />
              <text
                x="12"
                y="16"
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
    </h2>
  );
};

export default StepHeader;
