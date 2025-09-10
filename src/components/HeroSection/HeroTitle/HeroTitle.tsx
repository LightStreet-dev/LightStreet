import s from "./HeroTitle.module.css";
import { useTranslation } from "react-i18next";

const HeroTitle: React.FC = () => {
  const { t } = useTranslation();

  const word1 = t("hero.heroTitle1");
  const word3 = t("hero.heroTitle3");

  return (
    <div className={s.heroTitleContainer}>
      <h1 className={s.heroTitle}>
        {/* Перше слово з першою літерою на фоні */}
        <span className={s.heroTitleContent1} data-first-letter={word1.charAt(0)}>
          {word1}
        </span>

        {/* Друге слово */}
        <span className={s.heroTitleContent2}>{t("hero.heroTitle2")}</span>

        {/* Третє слово з першою літерою на фоні */}
        <span className={s.heroTitleContent3} data-first-letter={word3.charAt(0)}>
          {word3}
        </span>
      </h1>

      <p className={s.heroText}>{t("hero.heroText")}</p>
    </div>
  );
};

export default HeroTitle;
