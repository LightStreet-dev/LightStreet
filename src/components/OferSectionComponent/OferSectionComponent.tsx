import ContactButton from "../ContactButton/ContactButton";
import s from "./OferSectionComponent.module.css";
import OfersListComponent from "./OfersListComponent/OfersListComponent";
import { useTranslation } from 'react-i18next'

interface modalProps {
  toggleForm: ()=> void
}
const OferSectionComponent: React.FC<modalProps> = ({toggleForm}) => {
  const {t} = useTranslation()
  return (
    <div className={`container ${s.oferContainer}`} id="services">
      <div>
      <div>
        <h2 className={s.oferTitle}>{t("oferSection.title")}</h2>
        <p className={s.oferText}>
          {t("oferSection.text")}
        </p>
      </div>
      <div className={s.oferBtnWrap}>
        <ContactButton className={s.oferButton}  toggleForm={toggleForm} />
      </div>
      </div>
      <OfersListComponent/>

    </div>
  );
};

export default OferSectionComponent;
