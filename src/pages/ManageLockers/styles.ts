import styled from 'styled-components';

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

export const LockersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LockerWrapper = styled.div`
  width: 80%;
  height: 94.36px;
  border-radius: 24px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 22px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 62px;
  background: linear-gradient(
    to bottom,
    rgba(205, 205, 205, 0.5) 0%,
    rgba(205, 205, 205, 0.5) 100%
  );
  border-radius: 1px;
  align-self: center;
`;

export const Title = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 60px;
  margin-right: 40px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
`;
