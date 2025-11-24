import s from "./HeroFeatures.module.css";
import { useTranslation } from "react-i18next";

const HeroFeatures: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ul className={s.featuresList}>
      <li className={s.featurIteam}>
        <div className={s.ratingWraper}>
          <p className={s.featurCount}>4.8</p>
          <img src="/svg/icon_star.svg" alt="star" className={s.ratingIcon} />
        </div>
        <p className={s.rating}>{t("hero.features.rating.rating")}</p>
        <p className={s.featurtext}>{t("hero.features.rating.text")}</p>
      </li>
      <li className={s.featurIteam}>
        <p className={s.featurCount}>50+</p>
       
        <p className={s.featurtext}>{t("hero.features.pages")}</p>
      </li>
      <li className={s.featurIteam}>
        <p className={s.featurCount}>99%</p>
     
        <p className={s.featurtext}>{t("hero.features.clients")}</p>
      </li>
    </ul>
  );
};

export default HeroFeatures;
  