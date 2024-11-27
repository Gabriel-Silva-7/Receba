import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 45px;
  margin-left: 41px;
  margin-bottom: 58px;
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
  width: 60%;
`;

export const LockersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(221, 221, 221, 0.87);
  width: 80%;
  height: 225px;
  border-radius: 10px;
`;

export const LockerTitle = styled.div`
  color: #000;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  opacity: 0.4;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 15px;
  margin-top: 70px;
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
  width: 60%;
  height: 62px;

  &:disabled {
    opacity: 0.55;
  }
`;
