import React, { useState } from 'react';
import type { StylesConfig, OptionProps } from 'react-select';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import s from './LanguageChanger.module.css';

interface OptionType {
  value: string;
  label: string;
}

const customStyles: StylesConfig<OptionType, false> = {
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
   width:'50px',
   
  }),
   input: (provided) => ({
    ...provided,
    width: '30px', // Встановіть бажану ширину
    border: 'none',
    padding: '0',
  
  }),
  option: (provided, state: OptionProps<OptionType, false>) => ({
    ...provided,
     width:'50px',
    color: 'white',
    padding: '10px 0',
    cursor: 'pointer',
   
    ':active': {
      backgroundColor: '#4CAF50',
    },
    backgroundColor: state.isFocused
      ? 'rgba(255, 255, 255, 0.1)'
      : 'transparent',
  }),
  container: (provided) => ({
    ...provided,
  
        border: 'none',
        padding:'0',
       
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    borderRadius: '8px',
    border: 'none',
    minHeight: '30px',
    padding: '12px',
     width: '70px',
     boxShadow: 'none'
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    border: 'none',
    color: '--mainContentColor',
  }),
 dropdownIndicator: (provided, state) => ({
  ...provided,
  padding: '0', // Зменшує відстань між текстом та стрілкою
  color: state.selectProps.menuIsOpen ? 'var(--mainContentColor)' : 'gray', // Змінює колір стрілки при відкритті меню
  '&:hover': {
    color: 'var(--mainContentColor)', // Колір при наведенні
  },
  transition: 'transform 0.2s ease', // Додає плавний перехід
  transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)', // Обертає стрілку при відкритті меню
})
};

const LanguageChanger: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);

  const handleLanguageChange = (selectedOption: OptionProps<OptionType, false>['data']) => {
    setSelectedLanguage(selectedOption.value);
    i18n.changeLanguage(selectedOption.value);
  };

  const languageOptions: OptionType[] = [
    { value: 'en', label: 'EN' },
    { value: 'ua', label: 'UA' },
    { value: 'pl', label: 'PL' },
  ];

  return (
    <div className={s.lngSwitcher}>
      <Select<OptionType, false>
        styles={customStyles}
        value={languageOptions.find(opt => opt.value === selectedLanguage)}
        onChange={opt => opt && handleLanguageChange(opt)}
        options={languageOptions}
        className={s.select}
        classNamePrefix="select"
         isSearchable={false}
        
      />
    </div>
  );
};

export default LanguageChanger;
