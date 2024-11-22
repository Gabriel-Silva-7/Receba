import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  StyledButton,
  StyledSelect,
  StyledMenuItem,
  StyledBackButton,
} from './styles';
import {
  Checkbox as MuiCheckbox,
  ListItemText,
  FormControl,
  InputLabel,
  FormControlLabel,
} from '@mui/material';

const ResidenceInformation: React.FC<{
  onSubmit: (data: any) => void;
  backStep: () => void;
  initialData?: any;
}> = ({ onSubmit, backStep, initialData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues: initialData });

  useEffect(() => {
    if (initialData) {
      const uniqueCondominiums = Array.from(
        new Set(initialData.map((item: any) => item.NomeCondominio))
      );
      const uniqueBlocks = Array.from(
        new Set(initialData.map((item: any) => item.Bloco))
      );
      const uniqueApartments = Array.from(
        new Set(initialData.map((item: any) => item.Apartamento))
      );

      setValue('condominium', uniqueCondominiums);
      setValue('block', uniqueBlocks);
      setValue('apartment', uniqueApartments);
    }
  }, [initialData, setValue]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="condominium"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>Condomínio</InputLabel>
            <StyledSelect
              label="Condomínio"
              {...field}
              multiple
              renderValue={value => (value as string[]).join(', ')}
              variant="outlined"
              fullWidth
              disabled
            >
              {Array.from(
                new Set(initialData?.map((item: any) => item.NomeCondominio))
              ).map((condominium: any) => (
                <StyledMenuItem key={condominium} value={condominium}>
                  <MuiCheckbox checked={field.value.includes(condominium)} />
                  <ListItemText primary={condominium} />
                </StyledMenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        )}
      />

      <Controller
        name="block"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>Bloco</InputLabel>
            <StyledSelect
              label="Bloco"
              {...field}
              multiple
              renderValue={value => (value as string[]).join(', ')}
              variant="outlined"
              fullWidth
              disabled
            >
              {Array.from(
                new Set(initialData?.map((item: any) => item.Bloco))
              ).map((block: any) => (
                <StyledMenuItem key={block} value={block}>
                  <MuiCheckbox checked={field.value.includes(block)} />
                  <ListItemText primary={block} />
                </StyledMenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        )}
      />

      <Controller
        name="apartment"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel>Apartamento</InputLabel>
            <StyledSelect
              label="Apartamento"
              {...field}
              multiple
              renderValue={value => (value as string[]).join(', ')}
              variant="outlined"
              fullWidth
              disabled
            >
              {Array.from(
                new Set(initialData?.map((item: any) => item.Apartamento))
              ).map((apartment: any) => (
                <StyledMenuItem key={apartment} value={apartment}>
                  <MuiCheckbox checked={field.value.includes(apartment)} />
                  <ListItemText primary={apartment} />
                </StyledMenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        )}
      />

      <Controller
        name="confirmation"
        control={control}
        defaultValue={false}
        rules={{ required: 'Confirmação é obrigatória' }}
        render={({ field }) => (
          <FormControlLabel
            control={<MuiCheckbox {...field} checked={field.value} />}
            label="Confirmo que as informações estão corretas"
          />
        )}
      />
      {errors.confirmation && (
        <span style={{ color: 'red', fontSize: '12px' }}>
          {String(errors.confirmation.message)}
        </span>
      )}

      <StyledButton type="submit">Próximo</StyledButton>
      <StyledBackButton onClick={backStep}>Voltar</StyledBackButton>
    </Form>
  );
};

export default ResidenceInformation;
