import { useTranslation } from "react-i18next";
import s from "./AditionalServices.module.css";
import ASComponent from "./ASComponent";
import { useState } from "react";

const AditionalServices: React.FC = () => {
  const { t } = useTranslation();
  const addittional = t("additionalServises", { returnObjects: true });
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };
  return (
    <div className={s.AditionalServicesContainer}>
      <div className={s.AStitleWrapper}>
        <h2 className={s.AStitle}>Dodatkowe usługi</h2>
      </div>
      <div className={s.ASlist}>
        {Object.entries(addittional).map(([key, value], idx) => (
          <ASComponent
            key={key + idx}
            asInfo={value}
            isOpen={openIdx === idx}
            onClick={() => handleToggle(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default AditionalServices;
