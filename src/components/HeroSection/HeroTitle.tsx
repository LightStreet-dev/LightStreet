
import clsx from "clsx";
import i18n from "../../i18n";
import s from "./HeroTitle.module.css";
import { useTranslation } from 'react-i18next'
const HeroTitle:React.FC = () => {
  const {t} = useTranslation();
 const isPL = i18n.language === 'pl';

    return (
    <div className={s.heroTitleContainer}>
      <h1 className={clsx(s.heroTitle, isPL && s.heroTitlePl)}>
        <span className={s.heroTitleContent1}>{t("hero.heroTitle1")}</span>
        <span className={s.heroTitleContent2}>{t("hero.heroTitle2")}</span>
        <span className={s.heroTitleContent3}>{t("hero.heroTitle3")}</span>
      </h1>

      <p className={s.heroText}>
        {t("hero.heroText")}
      </p>

        <button className={s.heroBatton} type="button">
          {t("hero.heroBtn")}
        </button>
    
    </div>
  );
};

export default HeroTitle;
