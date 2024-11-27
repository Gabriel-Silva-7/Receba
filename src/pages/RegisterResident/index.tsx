import { useEffect, useState } from 'react';
import * as S from './styles';
import { api } from '../../config/api';
import { useAuth } from '../../context/AuthContext';
import fotoTeste from '../../assets/fototeste.svg';
// import fotoTeste from '../../assets/condominioImage.svg';

const RegisterResident = () => {
  const [loading, setLoading] = useState<any>(false);
  const [cpf, setCpf] = useState<any>();
  const [bloco, setBloco] = useState<any>();
  const [apartamento, setApartamento] = useState<any>();
  const { email } = useAuth();
  const [condName, setCondName] = useState<any>();
  const [condHasImage] = useState<any>(true);

  const getCondName = async () => {
    setLoading(true);
    try {
      const response = await api.post('/userDetails', {
        email: email,
      });
      setCondName(response.data.userDetails[0].NomeCondominio);
    } catch (error) {
      console.error('Error fetching profile info:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCondName();
  }, []);

  const handleSubmit = () => {
    setLoading(true);
    api
      .post('/createMorador', {
        cpf: cpf,
        bloco: bloco,
        apartamento: apartamento,
        email: email,
      })
      .then(() => {
        setLoading(false);
        alert('Morador cadastrado com sucesso');
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <S.Container>
      <S.Cond>
        {condHasImage ? <S.CondImg src={fotoTeste} /> : <S.LogoWrapper />}
        <S.TextWrapper>
          <S.CondName>{condName ? condName : 'Condominio.'}</S.CondName>
        </S.TextWrapper>
      </S.Cond>
      <S.Form>
        <S.FormGroup>
          <S.Label htmlFor="cpf">CPF</S.Label>
          <S.Input
            value={cpf}
            onChange={e => {
              const numericValue = e.target.value.replace(/\D/g, '');
              setCpf(numericValue);
            }}
            id="cpf"
            type="text"
            placeholder="CPF"
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="bloco">Bloco</S.Label>
          <S.Input
            value={bloco}
            onChange={e => setBloco(e.target.value)}
            id="bloco"
            type="text"
            placeholder="Bloco"
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="apartamento">Apartamento</S.Label>
          <S.Input
            value={apartamento}
            onChange={e => setApartamento(e.target.value)}
            id="apartamento"
            type="text"
            placeholder="Apartamento"
          />
        </S.FormGroup>
        <S.Button
          disabled={loading || !cpf || !bloco || !apartamento}
          onClick={handleSubmit}
        >
          Cadastrar
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default RegisterResident;
