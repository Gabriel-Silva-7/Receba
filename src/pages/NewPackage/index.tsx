import InputSelect from '../../components/Select';
import * as S from './styles';
import logo from '../../assets/fastBox.png';

// import AsyncSelect from 'react-select/async';
import { api } from '../../config/api';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeaderMobile from './Components/HeaderNewPackage';
import CameraCapture from './Components/Camera';

// const loadOptions = (inputValue: string, callback: (options: any) => void) => {
//   setTimeout(() => {
//     callback(
//       [
//         { value: 'option1', label: 'Option 1' },
//         { value: 'option2', label: 'Option 2' },
//         { value: 'option3', label: 'Option 3' },
//       ].filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
//     );
//   }, 1000);
// };

const NewPackage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idCondominio = params.get('idCondominio');
  const [blockOptions, setBlockOptions] = useState<any[]>([]);
  const [apartmentOptions, setApartmentOptions] = useState({
    value: '',
    label: '',
  });
  const [block, setBlock] = useState({ value: '', label: '' });
  const [size, setSize] = useState({ value: '', label: '' });
  console.log(block);

  const getBlocks = async () => {
    const response = await api.post('/getBlock', {
      idCondominio: idCondominio,
    });
    const blockOptions = response.data.map((block: any) => ({
      value: block.Bloco,
      label: block.Bloco,
    }));
    setBlockOptions(blockOptions);
  };

  const getApartments = async () => {
    const response = await api.post('/getApartment', {
      idCondominio: idCondominio,
      block: block.value,
    });
    const apartmentOptions = response.data.map((apartment: any) => ({
      value: apartment.Apartamento,
      label: apartment.Apartamento,
    }));
    setApartmentOptions(apartmentOptions);
  };

  const getLockerNotBusy = async () => {
    const response = await api.post('/getLockerNotBusy', {
      idCondominio: idCondominio,
      tamanho: size.value,
    });
    console.log(response.data);
  };

  useEffect(() => {
    getBlocks();
  }, []);

  useEffect(() => {
    if (block.value) {
      getApartments();
    }
  }, [block]);

  useEffect(() => {
    if (apartmentOptions.value && size.value && block.value) {
      getLockerNotBusy();
    }
  }, [apartmentOptions, size, block]);

  const [step, setStep] = useState(1);

  console.log(step);

  const nextStep = () => {
    if (step === 3) {
      console.log('final');
    }
    setStep(prevStep => prevStep + 1);
  };

  // const prevStep = () => {
  //   setStep(prevStep => prevStep - 1);
  // };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <S.TextWrapper>
              <S.Title>Passo 1.</S.Title>
              <S.Description>
                Selecione o tamanho do locker e o apartamento da entrega.
              </S.Description>
            </S.TextWrapper>
            <S.InputWrapper>
              <InputSelect
                options={[{ value: 'G', label: 'G' }]}
                title="Tamanho:"
                onChange={(value: any) => {
                  setSize(value);
                }}
              />
              <InputSelect
                options={blockOptions}
                title="Bloco:"
                onChange={(value: any) => {
                  setBlock(value);
                }}
              />
              <InputSelect
                options={apartmentOptions}
                title="Apartamento:"
                onChange={(value: any) => {
                  setApartmentOptions(value);
                }}
              />
            </S.InputWrapper>
            <S.Button onClick={nextStep}>Avançar para entrega</S.Button>
          </>
        );
      case 2:
        return (
          <>
            <S.Title>Passo 2.</S.Title>
            <S.Description>
              Encontramos o locker perfeito para você!
            </S.Description>
            <S.InputWrapper>
              <CameraCapture />
            </S.InputWrapper>
            <S.Button onClick={nextStep}>Avançar para entrega</S.Button>
          </>
        );
      case 3:
        return (
          <>
            <S.Title>Passo 3.</S.Title>
            <S.Description>Confirme a Entrega.</S.Description>
            <S.InputWrapper>
              <InputSelect
                options={[{ value: 'G', label: 'G' }]}
                title="Tamanho:"
              />
              <InputSelect
                options={blockOptions}
                title="Bloco:"
                onChange={(value: any) => {
                  setBlock(value);
                }}
              />
              <InputSelect
                options={apartmentOptions}
                title="Apartamento:"
                onChange={(value: any) => {
                  setApartmentOptions(value);
                }}
              />
            </S.InputWrapper>
            <S.Button onClick={nextStep}>Avançar para entrega</S.Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <HeaderMobile setStep={setStep} step={step} />

      <S.ImgWrapper>
        <S.Img src={logo} alt="FastBox" />
      </S.ImgWrapper>
      {renderStep()}
    </S.Container>
  );
};

export default NewPackage;
