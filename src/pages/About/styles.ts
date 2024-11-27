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
  justify-content: space-around;
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
  gap: 20px;
`;

export const Description = styled.div`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 80%;
`;

export const Owners = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 10px;

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const PhotoWrapper = styled.div`
  text-align: center;
`;

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  @media (max-width: 900px) {
    width: 150px;
    height: 150px;
  }
`;

export const PhotoName = styled.p`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;
