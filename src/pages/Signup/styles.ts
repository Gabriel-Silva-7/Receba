import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  background: #f5f5f5;
`;

export const HeaderNav = styled.div`
  display: flex;
  height: 55px;
  width: 100%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img``;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: #111;
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 68px;
  margin-top: 56px;
`;

export const Description = styled.span`
  color: #666;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 497px;
`;

export const FormWrapper = styled.div`
  border-radius: 24px;
  background: #fff;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  width: 611px;
  height: 765px;
`;
