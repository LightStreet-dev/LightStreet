import React, { useEffect, useState } from "react";
import type { StylesConfig, OptionProps } from "react-select";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import s from "./LanguageChanger.module.css";

interface OptionType {
  value: string;
  label: string;
}

const customStyles: StylesConfig<OptionType, false> = {
  menu: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    width: "50px",
  }),
  input: (provided) => ({
    ...provided,
    width: "50px", // Встановіть бажану ширину
    border: "none",
    padding: "0",
  }),
  option: (provided, state: OptionProps<OptionType, false>) => ({
    ...provided,
    width: "50px",
    color: "white",
    padding: "10px 0",
    cursor: "pointer",

    ":active": {
      backgroundColor: "#4c5eafff",
    },
    backgroundColor: state.isFocused
      ? "rgba(104, 147, 153, 0.34)"
      : "transparent",
  }),
  container: (provided) => ({
    ...provided,

    border: "none",
    padding: "0",
    margin:'0'
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    
   
    border: "none",
    minHeight: "30px",
  
    width: "70px",
    boxShadow: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    border: "none",
    color: "--mainContentColor",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "0",
    color: state.selectProps.menuIsOpen ? "var(--mainContentColor)" : "gray",
    transition: "transform 0.5s ease, color 0.3s ease", // додаємо плавний перехід для color
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    "&:hover": {
      color: "var(--mainContentColor)",
    },
  }),
};

const LanguageChanger: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    i18n.language 
  );
  useEffect(() => {
  setSelectedLanguage(i18n.language);
}, [i18n.language]);

const handleLanguageChange = (
  selectedOption: OptionProps<OptionType, false>["data"]
) => {
  setSelectedLanguage(selectedOption.value);
  i18n.changeLanguage(selectedOption.value);

  const url = new URL(window.location.href);
  url.searchParams.set("lng", selectedOption.value);
  window.history.replaceState({}, '', url.toString());
};

  const languageOptions: OptionType[] = [
    { value: "en", label: "EN" },
    { value: "uk", label: "UA" },
    { value: "pl", label: "PL" },
  ];

  return (
    <div className={s.lngSwitcher}>
      <Select<OptionType, false>
        
        styles={customStyles}
        value={languageOptions.find((opt) => opt.value === selectedLanguage) || languageOptions.find((opt) => opt.value === i18n.language)}
        onChange={(opt) => opt && handleLanguageChange(opt)}
        options={languageOptions}
        className={s.select}
        classNamePrefix="select"
        isSearchable={false}
      />
    </div>
  );
};

export default LanguageChanger;
