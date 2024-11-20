import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  StyledTextField,
  StyledButton,
  StyledSelect,
  StyledMenuItem,
} from './styles';
import React from 'react';

const ResidenceInformation: React.FC<{ onSubmit: (data: any) => void }> = ({
  onSubmit,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="condominium"
        control={control}
        defaultValue=""
        rules={{ required: 'Condomínio é obrigatório' }}
        render={({ field }) => (
          <>
            <StyledSelect
              {...field}
              inputRef={field.ref}
              variant="outlined"
              fullWidth
              error={!!errors.condominium}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <StyledMenuItem value="" disabled>
                Selecione o condomínio *
              </StyledMenuItem>
              <StyledMenuItem value="Condomínio A">Condomínio A</StyledMenuItem>
              <StyledMenuItem value="Condomínio B">Condomínio B</StyledMenuItem>
              <StyledMenuItem value="Condomínio C">Condomínio C</StyledMenuItem>
            </StyledSelect>
          </>
        )}
      />
      {errors.condominium && (
        <span
          style={{
            color: 'red',
            marginTop: '-12px',
            marginBottom: '-12px',
            fontSize: '12px',
          }}
        >
          {String(errors.condominium.message)}
        </span>
      )}

      <Controller
        name="block"
        control={control}
        defaultValue=""
        rules={{ required: 'Bloco é obrigatório' }}
        render={({ field }) => (
          <StyledSelect
            {...field}
            inputRef={field.ref}
            variant="outlined"
            fullWidth
            error={!!errors.block}
            displayEmpty
            MenuProps={{ disablePortal: true }}
          >
            <StyledMenuItem value="" disabled>
              Selecione o bloco *
            </StyledMenuItem>
            <StyledMenuItem value="Bloco 1">Bloco 1</StyledMenuItem>
            <StyledMenuItem value="Bloco 2">Bloco 2</StyledMenuItem>
            <StyledMenuItem value="Bloco 3">Bloco 3</StyledMenuItem>
          </StyledSelect>
        )}
      />
      {errors.block && (
        <span
          style={{
            color: 'red',
            marginTop: '-12px',
            marginBottom: '-12px',
            fontSize: '12px',
          }}
        >
          {String(errors.block.message)}
        </span>
      )}

      <Controller
        name="apartment"
        control={control}
        defaultValue=""
        rules={{ required: 'Apartamento é obrigatório' }}
        render={({ field }) => (
          <StyledSelect
            {...field}
            inputRef={field.ref}
            variant="outlined"
            fullWidth
            error={!!errors.apartment}
            displayEmpty
            MenuProps={{ disablePortal: true }}
          >
            <StyledMenuItem value="" disabled>
              Selecione o apartamento *
            </StyledMenuItem>
            <StyledMenuItem value="Apartamento 101">
              Apartamento 101
            </StyledMenuItem>
            <StyledMenuItem value="Apartamento 102">
              Apartamento 102
            </StyledMenuItem>
            <StyledMenuItem value="Apartamento 103">
              Apartamento 103
            </StyledMenuItem>
          </StyledSelect>
        )}
      />
      {errors.apartment && (
        <span
          style={{
            color: 'red',
            marginTop: '-12px',
            marginBottom: '-12px',
            fontSize: '12px',
          }}
        >
          {String(errors.apartment.message)}
        </span>
      )}
      <StyledButton>Próximo</StyledButton>
    </Form>
  );
};

export default ResidenceInformation;
