import { useMediaQuery } from "react-responsive";
import s from "./AboutUsComponent.module.css";
import HeroTemList from "../HeroSection/HeroTemList/HeroTemList";
import { useTranslation } from 'react-i18next'

const AboutUsComponent: React.FC = () => {
  const teamVisible = useMediaQuery({ maxWidth: 768 });
const {t} = useTranslation()

  return (
    <div className={s.aboutUs}>
      <div className="container">
        <h2 className={s.aboutUsTitle}>{t("aboutUs.title")}</h2>

        <div className={s.aboutUsWrapper}>
          <div>
            <p className={s.aboutUsText}>
              {t("aboutUs.textOne")}
            </p>
          </div>
          <svg className={s.aboutLogo}>
            <use href="/svg/symbol-defs.svg#LSLogo"></use>
          </svg>

          <div>
            <p className={s.aboutUsText}>
               {t("aboutUs.textTwo")}
            </p>
          </div>
        </div>
        {teamVisible && <HeroTemList />}
      </div>
    </div>
  );
};

export default AboutUsComponent;
