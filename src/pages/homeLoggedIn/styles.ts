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
`;

export const LastPackages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LastPackagesTitle = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 50px;
  margin-bottom: 8px;
`;

export const LastPackagesWrapper = styled.div`
  width: 90%;
  height: 140px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f6efda;
  display: flex;
  justify-content: center;

  img {
    width: 58px;
    height: 58px;
  }
`;

export const PackageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 32%;
  cursor: pointer;
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

export const LockerNumber = styled.span`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 8px;
`;

export const LockerDate = styled.span`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContainerMyPackages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const MyPackages = styled.div`
  width: 90%;
  height: 94.36px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.05));
  border-radius: 24px;
  background: #fff;
  cursor: pointer;

  display: flex;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 19px;
  flex-shrink: 0;
  margin-top: 48px;

  svg {
  }
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-grow: 1;
`;

export const MyPackagesImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const MyPackagesTitle = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContainerNeedHelp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg {
    justify-self: flex-end;
  }
`;

export const NeedHelp = styled.div`
  width: 90%;
  height: 94.36px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.05));
  border-radius: 24px;
  background: #fff;
  cursor: pointer;

  display: flex;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 19px;
  margin-top: 18px;
`;

export const NeedHelpTitle = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const NeedHelpIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;

export const NoPackages = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const NoPackageText = styled.span`
  width: 50%;
`;
