import Select from 'react-select';
import * as S from './styles';

const InputSelect = ({
  title,
  styled,
  options,
  onChange,
  value,
  isDisable,
  styledLabel,
}: any) => {
  // const CustomDropdownIndicator = (props: any) => {
  //   return (
  //     <components.DropdownIndicator {...props}>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="13"
  //         height="16"
  //         viewBox="0 0 13 16"
  //         fill="none"
  //       >
  //         <path
  //           d="M12.6109 14.8264L10.1259 11.3214C9.94045 11.0479 9.60664 10.9459 9.30528 11.0293L8.53102 9.86099C10.8631 8.14092 11.4658 4.83989 9.83845 2.4012C8.69792 0.690413 6.73214 -0.209027 4.70608 0.0413329C3.86228 0.152604 3.07875 0.449326 2.3694 0.936136C-0.0924721 2.62374 -0.741552 6.01287 0.922874 8.50719C2.06804 10.218 4.02919 11.1267 6.05524 10.8671C6.79241 10.7743 7.47858 10.5286 8.12302 10.1438L8.90656 11.3214C8.74429 11.5718 8.73038 11.901 8.90656 12.1699L11.3916 15.6703C11.6141 16.0133 12.0824 16.1014 12.4209 15.8742C12.75 15.6378 12.8428 15.1649 12.6109 14.8264ZM7.9283 9.27218C5.83734 10.7002 2.99529 10.1438 1.58586 8.02502C0.16716 5.90623 0.718878 3.0271 2.80984 1.59912C4.90081 0.171149 7.74285 0.727503 9.15228 2.84629C10.5663 4.96043 10.0193 7.83956 7.9283 9.27218Z"
  //           fill="#464650"
  //         />
  //       </svg>
  //     </components.DropdownIndicator>
  //   );
  // };

  const colourStyles = {
    menuList: (styles: any) => ({
      ...styles,
      background: `#ffffff`,
      color: `#9FA2B4`,
      fontSize: '13px',
    }),
    option: (styles: any, { isFocused, isSelected }: any) => ({
      ...styles,
      background: isFocused ? `#9FA2B4` : isSelected ? `#9FA2B4` : undefined,
      zIndex: 1,
      color: isFocused ? `#ffffff` : isSelected ? `#ffffff` : `#9FA2B4`,
      fontSize: '13px',
      marginTop: '0!important',
    }),
    menu: (base: any) => ({
      ...base,
      zIndex: 100,
      color: `#9FA2B4`,
      fontSize: '13px',
      margin: '0!important',
    }),
  };

  return (
    <S.Container style={styled}>
      <p style={styledLabel}>{title}</p>
      <Select
        isDisabled={isDisable}
        value={value}
        onChange={onChange}
        placeholder="Selecione"
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={colourStyles}
        classNames={{
          control: state =>
            state.isFocused ? 'border-grey-100' : 'border-grey-100',
        }}
      />
    </S.Container>
  );
};

export default InputSelect;
