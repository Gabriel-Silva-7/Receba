import { useState } from 'react';
import * as S from './styles';
import { api } from '../../config/api';
import { useAuth } from '../../context/AuthContext';

const Help = () => {
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const { userId } = useAuth();

  const handleSubmit = () => {
    setLoading(true);
    if (userId) {
      api
        .post('/createHelp', {
          idUsuario: userId,
          telefone: telefone,
          email: email,
          assunto: assunto,
          mensagem: mensagem,
        })
        .then(() => {
          setLoading(false);
          alert('Ticket enviado com sucesso!');
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .post('/createHelp', {
          idUsuario: null,
          telefone: telefone,
          email: email,
          assunto: assunto,
          mensagem: mensagem,
        })
        .then(() => {
          setLoading(false);
          alert('Ticket enviado com sucesso!');
          window.location.reload();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <S.Container>
      <S.Title>
        Precisa de ajuda ou ficou alguma dúvida?
        <br />
        Preencha o formulário abaixo e retornaremos em até 1 dia útil.
      </S.Title>
      <S.Form>
        <S.FormGroup>
          <S.Label htmlFor="telefone">Telefone</S.Label>
          <S.Input
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            id="telefone"
            type="tel"
            placeholder="Telefone"
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Email"
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="assunto">Assunto</S.Label>
          <S.Input
            value={assunto}
            onChange={e => setAssunto(e.target.value)}
            id="assunto"
            type="text"
            placeholder="Assunto"
          />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label htmlFor="mensagem">Mensagem</S.Label>
          <S.TextArea
            value={mensagem}
            onChange={e => setMensagem((e.target as HTMLTextAreaElement).value)}
            id="mensagem"
            placeholder="Mensagem"
          />
        </S.FormGroup>
        <S.Button
          disabled={loading || !telefone || !email || !assunto || !mensagem}
          onClick={handleSubmit}
        >
          Enviar
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Help;
