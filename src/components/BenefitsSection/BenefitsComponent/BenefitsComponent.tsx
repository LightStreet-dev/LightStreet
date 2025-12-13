import s from "./BenefitsComponent.module.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
const BenefitsComponent = () => {
  const { t } = useTranslation();
  const benefitTrigger = useRef<HTMLDivElement | null>(null);
  return (
    <div className="container">
      <div ref={benefitTrigger} className={s.benefitsWrapper}>
        <h2 className={s.benefitsTitle}>{t("Benefits.title")}</h2>
        <ul className={s.benefitsList}>
          <li className={s.benefitItem}>
            <svg className={s.benefitIcon} width="150" height="150">
              <use href="svg\symbol-defs.svg#benefitOne"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>
                {t("Benefits.benefitsList.expiriance.title")}
              </h2>
              <p className={s.benefitText}>
                {t("Benefits.benefitsList.expiriance.text")}
              </p>
            </div>
          </li>
          <li className={s.benefitItem}>
            <svg className={s.benefitIcon} width="150" height="150">
              <use href="svg\symbol-defs.svg#BenefitTwo"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>
                {t("Benefits.benefitsList.efects.title")}
              </h2>
              <p className={s.benefitText}>
                {t("Benefits.benefitsList.efects.text")}
              </p>
            </div>
          </li>
          <li className={s.benefitItem}>
            <svg className={s.benefitIcon} width="150" height="150">
              <use href="svg\symbol-defs.svg#BenefitTree"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>
                {t("Benefits.benefitsList.approach.title")}
              </h2>
              <p className={s.benefitText}>
                {t("Benefits.benefitsList.approach.text")}
              </p>
            </div>
          </li>
          <li className={s.benefitItem}>
            <svg className={s.benefitIcon} width="150" height="150">
              <use href="svg\symbol-defs.svg#BenefitFour"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>
                {t("Benefits.benefitsList.support.title")}
              </h2>
              <p className={s.benefitText}>
                {t("Benefits.benefitsList.support.text")}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenefitsComponent;
