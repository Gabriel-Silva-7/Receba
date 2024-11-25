import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh + 100px);
`;

export const BoxLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 28px;
`;

export const BoxLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #f6efda;
  width: 90%;
  height: 347px;

  img {
    width: 200px;
    height: 200px;
  }
`;

export const LabelTitle = styled.div`
  width: 85%;
  color: #333;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const LabelDescription = styled.div`
  color: #333;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 85%;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    margin-right: 10px;
  }

  label {
    width: 65%;
    color: #333;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-weight: 400;
  }
`;

export const WrapperCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 90%;

  color: #333;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const UnlockLockerButton = styled.button`
  display: flex;
  width: 90%;
  height: 50px;
  padding: 24px 16px 24px 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19px;
  flex-shrink: 0;
  border-radius: 35px;
  background: #9ef01a;
  border: none;
  color: #000;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  margin-top: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
