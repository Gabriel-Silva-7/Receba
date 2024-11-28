import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LockerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 94.36px;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 19px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #fff;

  & + & {
    margin-top: 14px;
  }
`;

export const LockerContainer = styled.div`
  width: 85%;
  margin-top: 69px;
`;

export const MyPackagesImg = styled.img`
  width: 60px;
  height: 60px;
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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LockerTitle = styled.span`
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PackageReceived = styled.span`
  color: #333;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PackageWithdrawn = styled.span`
  color: #333;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-grow: 1;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const NoPackageImg = styled.img`
  width: 223px;
  height: 223px;
`;

export const NoPackageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  gap: 32px;
`;

export const NoPackageText = styled.span`
  color: #333;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 90%;
`;
