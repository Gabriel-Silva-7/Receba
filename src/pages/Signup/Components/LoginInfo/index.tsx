import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { Form, StyledTextField, StyledButton } from './styles';
import React, { useState } from 'react';
import { API_URL } from '../../../../config/env';

const LoginInfo: React.FC<{
  onSubmit: (data: any) => void;
  initialData: any;
}> = ({ onSubmit, initialData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  const [emailExists, setEmailExists] = useState();

  const checkEmailExists = async (email: string): Promise<boolean> => {
    try {
      const response = await axios.post(`${API_URL}/verifyuser`, { email });
      setEmailExists(response.data.value);
      return response.data.value;
    } catch (error) {
      console.error('Error verifying email:', error);
      return false;
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Email é obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Endereço de email inválido',
          },
          validate: async value => {
            const exists = await checkEmailExists(value);
            return exists ? 'Email já existe' : true;
          },
        }}
        render={({ field }) => (
          <StyledTextField
            {...field}
            inputRef={field.ref}
            label="Email *"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? String(errors.email.message) : ''}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 6,
            message: 'A senha deve ter pelo menos 6 caracteres',
          },
        }}
        render={({ field }) => (
          <StyledTextField
            {...field}
            inputRef={field.ref}
            label="Senha *"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password ? String(errors.password.message) : ''}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        rules={{
          required: 'Confirmação de senha é obrigatória',
          validate: (value: string) =>
            value === control._formValues.password || 'As senhas não coincidem',
        }}
        render={({ field }) => (
          <StyledTextField
            {...field}
            inputRef={field.ref}
            label="Confirmar Senha *"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword
                ? String(errors.confirmPassword.message)
                : ''
            }
          />
        )}
      />
      <StyledButton disabled={emailExists}>Próximo</StyledButton>
    </Form>
  );
};

export default LoginInfo;
