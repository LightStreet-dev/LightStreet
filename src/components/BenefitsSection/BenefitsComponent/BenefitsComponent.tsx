import s from "./BenefitsComponent.module.css";

const BenefitsComponent = () => {
  return (
    <div className="container">
      <div>
        <h2 className={s.benefitsTitle}>Dlaczego warto pracować z nami?</h2>
        <ul className={s.benefitsList}>
          <li className={s.benefitItem}>
            <svg className={s.benefitIcon} width="150" height="150">
              <use href="svg\symbol-defs.svg#benefitOne"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>
                Doświadczenie i profesjonalizm
              </h2>
              <p className={s.benefitText}>
                Tworzymy strony internetowe i aplikacje dla firm z różnych
                branż. Jesteśmy w stałym kontakcie z klientem przed, w trakcie i
                po zakończeniu projektu.
              </p>
            </div>
          </li>
          <li className={s.benefitItem}>
            <svg className={s.benefitIcon} width="150" height="150">
              <use href="svg\symbol-defs.svg#BenefitTwo"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>Efekty biznesowe</h2>
              <p className={s.benefitText}>
                Łączymy estetykę z funkcjonalnością, aby Twoja strona była nie
                tylko piękna, ale też skutecznie przyciągała klientów i
                zwiększała konwersję.
              </p>
            </div>
          </li>
          <li className={s.benefitItem}>
            <svg className={s.benefitIcon} width="150" height="150">
              <use href="svg\symbol-defs.svg#BenefitTree"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>Indywidualne podejście</h2>
              <p className={s.benefitText}>
                Nie stosujemy gotowych schematów — każdą stronę projektujemy od
                podstaw, tak aby najlepiej prezentował firmę lub produkt/usługę.
              </p>
            </div>
          </li>
          <li className={s.benefitItem}>
            <svg className={s.benefitIcon} width="150" height="150">
              <use href="svg\symbol-defs.svg#BenefitFour"></use>
            </svg>
            <div className={s.benefitTextWrapper}>
              <h2 className={s.benefitItemTitle}>Projekt pod klucz</h2>
              <p className={s.benefitText}>
                Zapewniamy pełne wsparcie - od projektu graficznego, kontentu i
                treści, po SEO oraz opiekę techniczną
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenefitsComponent;
