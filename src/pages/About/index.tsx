import * as S from './styles';
import logo from '../../assets/about-image.png';
import amandaimg from '../../assets/amanda-imag.png';
import matheusimg from '../../assets/matheus-image.png';
import kaiqueimg from '../../assets/kaique-image.png';
import denisimg from '../../assets/denis-image.png';
import gabrielimg from '../../assets/gabriel-image.png';

const About = () => {
  const photos = [
    { image: amandaimg, nome: 'Amanda' },
    { image: matheusimg, nome: 'Matheus' },
    { image: kaiqueimg, nome: 'Kaique' },
    { image: denisimg, nome: 'Denis' },
    { image: gabrielimg, nome: 'Gabriel' },
  ];

  return (
    <S.Container>
      <S.Content>
        <S.ContentText>
          <S.Description>
            Somos um grupo de estudantes comprometidos em criar soluções
            práticas para o dia a dia. Nosso projeto surgiu para facilitar a
            vida em um mundo conectado, oferecendo um sistema de lockers
            inteligentes que torna o recebimento de encomendas mais seguro,
            prático e acessível, eliminando problemas como horários
            indisponíveis e preocupações com extravios.
          </S.Description>
        </S.ContentText>
        <S.ImgLogo src={logo} />
      </S.Content>
      <S.Owners>
        {photos.map((photo, index) => (
          <S.PhotoWrapper key={index}>
            <S.Photo src={photo.image} alt={photo.nome} />
            <S.PhotoName>{photo.nome}</S.PhotoName>
          </S.PhotoWrapper>
        ))}
      </S.Owners>
    </S.Container>
  );
};

export default About;
