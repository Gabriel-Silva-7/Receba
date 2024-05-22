import * as S from './styles';
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ImgLogo src={logo} />
        <S.ContentText>
          <S.Title>O futuro das entregas</S.Title>
          <S.Description>
            Construindo hoje a forma de receber no futuro.
          </S.Description>
        </S.ContentText>
      </S.Content>
      <S.ContentDescription>
        <S.CentralText>Lorem</S.CentralText>
        <S.CentralDescription>
          Lorem impsunb Lorem impsunb Lorem impsunb Lorem impsunb Lorem impsunb
          Lorem impsunb.
        </S.CentralDescription>
        <S.GridDescription>
          <S.GridItem>
            <S.CentralText>Lorem</S.CentralText>
            <S.CentralDescription>
              Lorem impsunb Lorem impsunb Lorem impsunb Lorem impsunb Lorem
              impsunb Lorem impsunb.
            </S.CentralDescription>
          </S.GridItem>
          <S.GridItem>
            <S.CentralText>Lorem</S.CentralText>
            <S.CentralDescription>
              Lorem impsunb Lorem impsunb Lorem impsunb Lorem impsunb Lorem
              impsunb Lorem impsunb.
            </S.CentralDescription>
          </S.GridItem>
          <S.GridItem>
            <S.CentralText>Lorem</S.CentralText>
            <S.CentralDescription>
              Lorem impsunb Lorem impsunb Lorem impsunb Lorem impsunb Lorem
              impsunb Lorem impsunb.
            </S.CentralDescription>
          </S.GridItem>
        </S.GridDescription>
      </S.ContentDescription>
    </S.Container>
  );
};

export default Home;
