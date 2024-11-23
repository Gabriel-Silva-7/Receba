import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  StyledTextField,
  StyledButton,
  StyledCheckbox,
  StyledFormControlLabel,
} from './styles';
import React from 'react';
import axios from 'axios';
import { API_URL } from '../../../../config/env';
import InputMask from 'react-input-mask';

const BasicInfoForm: React.FC<{
  onSubmit: (data: any) => void;
  backStep: () => void;
  initialData?: any;
  setUserInfo: any;
  userInfo: any;
}> = ({ onSubmit, backStep, initialData, setUserInfo }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: initialData });

  const watchIsCnpj = watch('isCnpj', false);

  const verifyCpf = async (cpf: string) => {
    try {
      const unformattedCpf = cpf.replace(/[^\d]/g, '');
      const response = await axios.post(`${API_URL}/verifyCpf`, {
        cpf: unformattedCpf,
      });
      setUserInfo(response.data.response);
      return response.data;
    } catch (error) {
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
      {/* <Controller
        name="date"
        control={control}
        defaultValue={null}
        rules={{ required: 'Data é obrigatória' }}
        render={({ field }) => (
          <InputMask
            mask="99/99/9999"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          >
            {() => (
              <StyledTextField
                {...field}
                inputRef={field.ref}
                label="Data de Nascimento *"
                variant="outlined"
                fullWidth
                error={!!errors.date}
                helperText={errors.date ? String(errors.date.message) : ''}
              />
            )}
          </InputMask>
        )}
      /> */}
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
          validate: async value => {
            if (watchIsCnpj) return true;
            const result = await verifyCpf(value);
            return result?.value
              ? true
              : 'Não foi possível encontrar uma unidade vinculada ao seu CNPJ ou CPF. Por favor, verifique seus dados ou entre em contato com o síndico do seu condomínio.';
          },
        }}
        render={({ field }) => (
          <InputMask
            mask="999.999.999-99"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          >
            {() => (
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
          </InputMask>
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
            <InputMask
              mask="99.999.999/9999-99"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            >
              {() => (
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
            </InputMask>
          )}
        />
      )}
      {watch('useLandline') ? (
        <Controller
          name="landline"
          control={control}
          defaultValue=""
          rules={{
            required: 'Telefone fixo é obrigatório',
            pattern: {
              value: /^\(\d{2}\) \d{4}-\d{4}$/,
              message: 'Formato de telefone fixo inválido',
            },
          }}
          render={({ field }) => (
            <InputMask
              mask="(99) 9999-9999"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            >
              {() => (
                <StyledTextField
                  {...field}
                  inputRef={field.ref}
                  label="Telefone Fixo *"
                  variant="outlined"
                  fullWidth
                  error={!!errors.landline}
                  helperText={
                    errors.landline ? String(errors.landline.message) : ''
                  }
                />
              )}
            </InputMask>
          )}
        />
      ) : (
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
            <InputMask
              mask="(99) 99999-9999"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            >
              {() => (
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
            </InputMask>
          )}
        />
      )}

      <Controller
        name="useLandline"
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
            label="Usar telefone fixo?"
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
