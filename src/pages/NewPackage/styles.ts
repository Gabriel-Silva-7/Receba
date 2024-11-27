import { FormControlLabel } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh + 20%);
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
`;

export const Img = styled.img`
  width: 146px;
  height: 146px;
`;

export const Title = styled.h1`
  color: #000;
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Description = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 88%;
  gap: 28px;
  margin-top: 32px;
  margin-bottom: 50px;
`;

export const ButtonUnlock = styled.button`
  border-radius: 8px;
  background: #4bca07;
  width: 60%;
  height: 62px;
  border: none;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  svg {
    margin-left: 16px;
  }

  &:disabled {
    opacity: 0.55;
  }
`;

export const ButtonNext = styled.button`
  border-radius: 8px;
  border: none;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: #4182f9;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 55%;
  height: 62px;

  &:disabled {
    opacity: 0.55;
  }
`;

export const ButtonLock = styled.button`
  border-radius: 8px;
  background: #b70000;
  border: none;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 55%;
  height: 62px;
  margin-bottom: 40px;

  &:disabled {
    opacity: 0.55;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BoxLockerNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 156px;
  background: #dddddd;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #000;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const FormControlWrapper = styled.div`
  display: flex;
  width: 88%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledFormControlLabel = styled(FormControlLabel)``;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
