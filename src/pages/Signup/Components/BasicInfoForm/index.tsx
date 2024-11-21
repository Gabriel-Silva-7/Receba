import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  StyledTextField,
  StyledButton,
  StyledCheckbox,
  StyledFormControlLabel,
} from './styles';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../config/env';

const BasicInfoForm: React.FC<{
  onSubmit: (data: any) => void;
  backStep: () => void;
  initialData?: any;
}> = ({ onSubmit, backStep, initialData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: initialData });

  const [UserInfo, setUserInfo] = useState('');
  const watchIsCnpj = watch('isCnpj', false);

  const verifyCpf = async (cpf: string) => {
    try {
      const unformattedCpf = cpf.replace(/[^\d]/g, '');
      const response = await axios.post(`${API_URL}/verifyCpf`, {
        cpf: unformattedCpf,
      });
      console.log(response);
      setUserInfo(response.data);
      return response.data;
    } catch (error) {
      console.error('Error verifying CPF:', error);
      return null;
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{ required: 'Nome é obrigatório' }}
        render={({ field }) => (
          <StyledTextField
            {...field}
            inputRef={field.ref}
            label="Nome *"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name ? String(errors.name.message) : ''}
          />
        )}
      />
      <Controller
        name="cpf"
        control={control}
        defaultValue=""
        rules={{
          required: 'CPF é obrigatório',
          pattern: {
            value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            message: 'Formato de CPF inválido',
          },
        }}
        render={({ field }) => (
          <StyledTextField
            {...field}
            inputRef={field.ref}
            label="CPF *"
            variant="outlined"
            fullWidth
            error={!!errors.cpf}
            onBlur={() => verifyCpf(watch('cpf'))}
          />
        )}
      />
      <Controller
        name="isCnpj"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <StyledFormControlLabel
            control={
              <StyledCheckbox
                {...field}
                checked={field.value}
                onChange={e => {
                  field.onChange(e.target.checked);
                }}
              />
            }
            label="O apartamento está vinculado a um CNPJ?"
          />
        )}
      />
      {watchIsCnpj && (
        <Controller
          name="cnpj"
          control={control}
          defaultValue=""
          rules={{
            required: 'CNPJ é obrigatório',
            pattern: {
              value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
              message: 'Formato de CNPJ inválido',
            },
          }}
          render={({ field }) => (
            <StyledTextField
              {...field}
              inputRef={field.ref}
              label="CNPJ *"
              variant="outlined"
              fullWidth
              error={!!errors.cnpj}
              helperText={errors.cnpj ? String(errors.cnpj.message) : ''}
            />
          )}
        />
      )}
      <Controller
        name="birthDate"
        control={control}
        defaultValue=""
        rules={{ required: 'Data de nascimento é obrigatória' }}
        render={({ field }) => (
          <StyledTextField
            {...field}
            inputRef={field.ref}
            label="Data de Nascimento *"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            error={!!errors.birthDate}
            helperText={
              errors.birthDate ? String(errors.birthDate.message) : ''
            }
          />
        )}
      />

      <Controller
        name="cellphone"
        control={control}
        defaultValue=""
        rules={{
          required: 'Celular é obrigatório',
          pattern: {
            value: /^\(\d{2}\) \d{5}-\d{4}$/,
            message: 'Formato de celular inválido',
          },
        }}
        render={({ field }) => (
          <StyledTextField
            {...field}
            inputRef={field.ref}
            label="Celular *"
            variant="outlined"
            fullWidth
            error={!!errors.cellphone}
            helperText={
              errors.cellphone ? String(errors.cellphone.message) : ''
            }
          />
        )}
      />

      <Controller
        name="terms"
        control={control}
        defaultValue={false}
        rules={{ required: 'Você deve aceitar os termos' }}
        render={({ field }) => (
          <StyledFormControlLabel
            control={
              <StyledCheckbox
                {...field}
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
              />
            }
            label="Eu aceito os termos e condições *"
          />
        )}
      />
      {errors.terms && (
        <p
          style={{
            color: '#d32f2f',
            fontSize: '0.75rem',
            marginTop: -24,
            marginLeft: 14,
          }}
        >
          {String(errors.terms.message)}
        </p>
      )}
      <StyledButton type="submit">Próximo</StyledButton>
      <StyledButton onClick={backStep}>Voltar</StyledButton>
    </Form>
  );
};

export default BasicInfoForm;
