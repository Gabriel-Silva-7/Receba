import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4rem;
`;

export const ImgLogo = styled.img`
  width: 473px;
  height: 457px;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const Description = styled.div`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ContentDescription = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  background: #e3e3e3;
  flex-direction: column;
`;

export const CentralText = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
  font-size: 64px;
`;

export const CentralDescription = styled.span`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const GridDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 40px;
  margin-top: 40px;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
