import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #f5f5f5;
`;

const sharedStyles = `
  &::placeholder {
    color: #a9a9a9;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  ${sharedStyles}
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const Select = styled.select`
  ${sharedStyles}
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #a9a9a9;
  font-size: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 250px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImgLogo = styled.img`
  width: 94.6px;
  height: 91.4px;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GifWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  margin-left: 250px;
`;
