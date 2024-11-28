import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-75%')};
  width: 75%;
  height: 100%;
  background: #fff;
  transition: left 0.3s ease;
  border-radius: 0px 24px 24px 0px;
  z-index: 10;

  @media (min-width: 900px) {
    width: 14%;
  }
`;

export const MenuHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 58px;
  padding: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-right: 22px;
`;

export const Logo = styled.img``;

export const UserImg = styled.img`
  width: 41px;
  height: 41px;
  border-radius: 50%;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  color: #333;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 32px;
`;

export const MenuItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 24px;
  border-radius: 14px;
  background: ${({ isSelected }) => (isSelected ? '#333' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};

  svg {
    width: 18px;
    height: 16px;
  }
`;

export const Icon = styled(FontAwesomeIcon)<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')};
  margin-right: 56px;
`;

export const CloseIcon = styled(FontAwesomeIcon)``;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const UserName = styled.span`
  color: #333;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LogoutButton = styled.button`
  border: none;
  background: none;
`;

export const LogoutIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  margin-left: 31px;
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 5;
`;
