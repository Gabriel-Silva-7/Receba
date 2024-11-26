import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  img {
    width: 23px;
    height: 23px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  flex-grow: 1;
  text-align: center;
`;
