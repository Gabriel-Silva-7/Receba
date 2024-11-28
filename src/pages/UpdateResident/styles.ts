import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;

export const Cond = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 45px;
  margin-left: 41px;
  margin-bottom: 58px;

  @media (max-width: 360px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const CondImg = styled.img`
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

export const CondName = styled.span`
  color: #333;
  text-align: center;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 75%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  height: 100%;
  min-height: 250px;
`;

export const Button = styled.button`
  width: 20%;
  padding: 10px;
  margin: 20px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    opacity: 0.55;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 87%;
  margin-top: 24px;
  gap: 10px;
`;

export const Label = styled.label`
  color: #333;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 20px;
`;
