import { useEffect, useState } from 'react';
import * as S from './styles';
import { api } from '../../config/api';
import { useAuth } from '../../context/AuthContext';
import fotoTeste from '../../assets/condominio.jpg';
import InputSelect from '../../components/Select';
import { CircularProgress } from '@mui/material';

const UpdateResident = () => {
  const [loading, setLoading] = useState<any>(false);
  const [bloco, setBloco] = useState<any>();
  const [apartamento, setApartamento] = useState<any>();
  const { email } = useAuth();
  const [resident, setResident] = useState<any>();
  const [condHasImage] = useState<any>(true);
  const [condNome, setCondName] = useState<any>();
  const [residentsOptions, setResidentOptions] = useState<any[]>([]);

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

  const getMyResidents = async () => {
    setLoading(true);
    try {
      const response = await api.post('/getMyResidents', {
        email: email,
      });
      const residentsOptions = response.data.getResidents.map(
        (resident: any) => ({
          value: resident.CPF,
          label: resident.CPF,
          IdMorador: resident.IdMorador,
          Bloco: resident.Bloco,
          IdUnidade: resident.IdUnidade,
        })
      );
      setResidentOptions(residentsOptions);
    } catch (error) {
      console.error('Error fetching profile info:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCondName();
    getMyResidents();
  }, []);

  console.log(resident?.value);

  const handleSubmit = () => {
    setLoading(true);
    api
      .post('/updateResident', {
        IdUnidade: resident?.IdUnidade,
        IdMorador: resident?.IdMorador,
        Apartamento: apartamento,
        Bloco: bloco,
        moradorCPF: resident?.value,
      })
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (loading) {
    return (
      <S.LoadingContainer>
        <CircularProgress />
      </S.LoadingContainer>
    );
  }

  return (
    <S.Container>
      <S.Cond>
        {condHasImage ? <S.CondImg src={fotoTeste} /> : <S.LogoWrapper />}
        <S.TextWrapper>
          <S.CondName>{condNome ? condNome : 'Condominio'}</S.CondName>
        </S.TextWrapper>
      </S.Cond>
      <S.Form>
        <S.FormGroup>
          <InputSelect
            options={residentsOptions}
            title="Morador:"
            onChange={(value: any) => {
              setResident(value);
            }}
            value={resident}
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="bloco">Bloco</S.Label>
          <S.Input
            value={bloco}
            onChange={(e: { target: { value: any } }) =>
              setBloco(e.target.value)
            }
            id="bloco"
            type="text"
            placeholder="Bloco"
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="apartamento">Apartamento</S.Label>
          <S.Input
            value={apartamento}
            onChange={(e: { target: { value: any } }) =>
              setApartamento(e.target.value)
            }
            id="apartamento"
            type="text"
            placeholder="Apartamento"
          />
        </S.FormGroup>
        <S.Button
          disabled={loading || !bloco || !apartamento || !resident}
          onClick={handleSubmit}
        >
          Cadastrar
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default UpdateResident;
