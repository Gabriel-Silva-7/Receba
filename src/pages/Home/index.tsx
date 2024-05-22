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
        <S.GridTitle>Conveniência para Moradores e Porteiros</S.GridTitle>
        <S.CentralDescription>
          Nossa caixa de correio inteligente simplifica o processo de
          recebimento de encomendas para moradores e porteiros. Com a capacidade
          de receber e armazenar pacotes de forma segura, ela elimina a
          necessidade de os moradores aguardarem a entrega ou de os porteiros
          lidarem com múltiplas entregas diárias.
        </S.CentralDescription>
        <S.GridDescription>
          <S.GridItem>
            <S.GridTitle>Segurança Reforçada</S.GridTitle>
            <S.GridItemDescription>
              Com nossa caixa de correio inteligente, os moradores do condomínio
              desfrutam de uma camada adicional de segurança. Mesmo com uma
              portaria eletrônica eficiente, nossas soluções garantem que as
              entregas sejam recebidas diretamente pelos destinatários, evitando
              o risco de extravios ou entregas inadequadas.
            </S.GridItemDescription>
          </S.GridItem>
          <S.GridItem>
            <S.GridTitle>Gerenciamento Eficiente de Encomendas</S.GridTitle>
            <S.GridItemDescription>
              Nossa solução oferece aos moradores a capacidade de gerenciar suas
              encomendas de forma eficiente. Com notificações em tempo real
              sobre entregas recebidas, eles podem planejar a retirada de seus
              pacotes com conveniência, mesmo quando estão ausentes.
            </S.GridItemDescription>
          </S.GridItem>
          {/* <S.GridItem>
            <S.GridTitle>Integração com Tecnologia Exclusiva</S.GridTitle>
            <S.GridItemDescription>
              Lorem impsunb Lorem impsunb Lorem impsunb Lorem impsunb Lorem
              impsunb Lorem impsunb.
            </S.GridItemDescription>
          </S.GridItem> */}
        </S.GridDescription>
      </S.ContentDescription>
    </S.Container>
  );
};

export default Home;
