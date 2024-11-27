import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh);
`;

export const Title = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 87%;
  margin-top: 22px;
  align-self: flex-start;
  margin-left: 30px;
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
  align-self: flex-start;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
