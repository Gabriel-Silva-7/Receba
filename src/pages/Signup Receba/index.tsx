import React, { useState } from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    cnpj: '',
    condominium: '',
    bloco: '',
    apartment: '',
    confirmPassword: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <S.Container>
      <S.GifWrapper>
        <img
          src="https://cdn.discordapp.com/attachments/1212959347462901843/1308261761442644071/RECEBA.gif?ex=673d4d36&is=673bfbb6&hm=68f8f768605030371be03f69ae5c9f9afdeedcde350175aaececfeb21cb6dda5&"
          alt="Signup Gif"
        />
        {/* <img
          src="https://i.pinimg.com/originals/f6/48/7a/f6487a65af5308d0767aef6216107394.gif"
          alt="Signup Gif"
        /> */}
      </S.GifWrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.LogoWrapper>
          <S.ImgLogo src={logo} />
          <h3>Receba!</h3>
        </S.LogoWrapper>
        <S.Label htmlFor="cpf_cnpj">CPF/CNPJ</S.Label>
        <S.Input
          type="text"
          name="cpf_cnpj"
          placeholder="CPF/CNPJ"
          value={formData.cpf || formData.cnpj}
          onChange={handleChange}
        />
        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <S.Row>
          <S.Column>
            <S.Label htmlFor="password">Senha</S.Label>
            <S.Input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
            />
          </S.Column>
          <S.Column>
            <S.Label htmlFor="confirmPassword">Confirmar Senha</S.Label>
            <S.Input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Senha"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </S.Column>
        </S.Row>
        {formData.password !== formData.confirmPassword && (
          <S.ErrorMessage>As senhas não correspondem</S.ErrorMessage>
        )}
        <S.Row>
          <S.Column>
            <S.Label htmlFor="name">Nome</S.Label>
            <S.Input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
            />
          </S.Column>
          <S.Column>
            <S.Label htmlFor="phone">Telefone</S.Label>
            <S.Input
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
            />
          </S.Column>
        </S.Row>
        <S.Label htmlFor="condominium">Condomínio</S.Label>
        <S.Select
          name="condominium"
          value={formData.condominium || ''}
          onChange={handleChange}
        >
          <option value="" disabled>
            Selecionar Condomínio
          </option>
          <option value="Condominium A">Condomínio A</option>
          <option value="Condominium B">Condomínio B</option>
          <option value="Condominium C">Condomínio C</option>
        </S.Select>
        <S.Row>
          <S.Column>
            <S.Label htmlFor="block">Bloco</S.Label>
            <S.Select
              name="block"
              value={formData.bloco || ''}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecionar Bloco
              </option>
              <option value="Block 1">Bloco 1</option>
              <option value="Bloco 2">Bloco 2</option>
              <option value="Bloco 3">Bloco 3</option>
            </S.Select>
          </S.Column>
          <S.Column>
            <S.Label htmlFor="apartment">Apartamento</S.Label>
            <S.Select
              name="apartment"
              value={formData.apartment || ''}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecionar Apartamento
              </option>
              <option value="101">101</option>
              <option value="102">102</option>
              <option value="103">103</option>
            </S.Select>
          </S.Column>
        </S.Row>
        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Signup;
