import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  & > a {
    color: black;
    text-decoration: none;
    font-size: 1rem;

    &.active {
      font-weight: bold;
    }

    &:hover {
      border-bottom: 2px solid #000;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ButtonWithoutBackground = styled.button`
  background: transparent !important;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
