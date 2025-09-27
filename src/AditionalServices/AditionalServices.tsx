import { useTranslation } from "react-i18next";
import s from "./AditionalServices.module.css";
import ASComponent from "./ASComponent";

const AditionalServices: React.FC = () => {
  const { t } = useTranslation();
  const addittional = t("additionalServises", { returnObjects: true });
  console.log(addittional)
  return (
    <div className={s.AditionalServicesContainer}>
      <div className={s.AStitleWrapper}>
        <h2 className={s.AStitle}>Dodatkowe usługi</h2>
      </div>
      <div className={s.ASlist}>
        {Object.entries(addittional).map(([key, value], idx) => (
          <ASComponent key={key + idx} asInfo ={value}/>
        ))}
      </div>
    </div>
  );
};

export default AditionalServices;
