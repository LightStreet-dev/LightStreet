import s from "./HeroTitle.module.css";
import { useTranslation } from "react-i18next";
const HeroTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={s.heroTitleContainer}>
      <h1 className={s.heroTitle}>
        <span className={s.heroTitleContent1}>{t("hero.heroTitle1")}</span>
        <span className={s.heroTitleContent2}>{t("hero.heroTitle2")}</span>
        <span className={s.heroTitleContent3}>{t("hero.heroTitle3")}</span>
      </h1>

      <p className={s.heroText}>{t("hero.heroText")}</p>

      
    </div>
  );
};

export default HeroTitle;
