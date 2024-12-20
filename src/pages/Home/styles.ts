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

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImgLogo = styled.img`
  width: 473px;
  height: 457px;

  @media (max-width: 900px) {
    width: 200px;
    height: 193px;
  }
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
  height: 100%;
  background: #e3e3e3;
  flex-direction: column;
`;

export const CentralText = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 75px;
  font-size: 48px;
`;

export const GridTitle = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 75px;
  font-size: 24px;

  @media (max-width: 900px) {
    margin-top: 0px;
    text-align: center;
    &:first-child {
      margin-top: 20px;
    }
  }
`;

export const CentralDescription = styled.span`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  align-self: center;
  width: 67%;
`;

export const GridItemDescription = styled.span`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  align-self: center;
  width: 70%;
`;

export const GridDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 40px;
  margin-top: 40px;
  justify-content: center;
  width: 100%;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    padding: 0px;
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 100px;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;
