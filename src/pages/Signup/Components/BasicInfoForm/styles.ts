import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const StyledTextField = styled(TextField)`
  margin-top: 16px;
  & .MuiOutlinedInput-root {
    border-radius: 16px;
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: rgba(102, 102, 102, 0.35);
    }
    & .MuiOutlinedInput-notchedOutline {
    }
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgba(102, 102, 102, 0.35);
  }
  & .MuiInputLabel-root.Mui-focused {
    color: rgba(102, 102, 102, 0.35);
  }
`;

export const StyledButton = styled.button`
  display: flex;
  padding: 14px 0px 14px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  opacity: 1;
  background: #111;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const StyledCheckbox = styled(Checkbox)`
  color: rgba(102, 102, 102, 0.35);
  &.Mui-checked {
    color: rgba(102, 102, 102, 0.55);
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  align-items: flex-start;
  margin-top: -10px;
  & .MuiFormControlLabel-label {
  }
`;
