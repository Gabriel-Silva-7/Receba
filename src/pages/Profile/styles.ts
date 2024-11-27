import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 45px;
  margin-left: 41px;

  @media (max-width: 360px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const UserImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 35px;
  border-radius: 50%;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-right: 35px;
`;

export const UserName = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionText = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 90%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 58px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #333;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #f9f9f9;
  padding: 0 10px;
  background-color: #f9f9f9;

  color: #000;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const LoadingSpinner = styled(CircularProgress)`
  color: #000;
`;

export const Button = styled.button`
  width: 30%;
  height: 7%;
  border-radius: 8px;
  background-color: #4182f9;
  border: none;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: center;
`;

export const UploadButton = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
