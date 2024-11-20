import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  StyledTextField,
  StyledButton,
  StyledCheckbox,
  StyledFormControlLabel,
} from './styles';
import React, { useState } from 'react';

const BasicInfoForm: React.FC<{ onSubmit: (data: any) => void }> = ({
  onSubmit,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();
  const [isCnpj, setIsCnpj] = useState(false);
  const watchIsCnpj = watch('isCnpj', false);

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
            helperText={errors.cpf ? String(errors.cpf.message) : ''}
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
                  setIsCnpj(e.target.checked);
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
      {errors.terms && <p>{String(errors.terms.message)}</p>}
      <StyledButton>Próximo</StyledButton>
    </Form>
  );
};

export default BasicInfoForm;
