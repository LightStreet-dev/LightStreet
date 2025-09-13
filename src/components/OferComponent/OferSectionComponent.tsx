import ContactButton from "../ContactButton/ContactButton";
import s from "./OferSectionComponent.module.css";

const OferSectionComponent: React.FC = () => {
  return (
    <div className={`container ${s.oferContainer}`}>
      <div>
        <h2 className={s.oferTitle}>Oferta</h2>
        <p className={s.oferText}>
          Koszt stworzenia strony internetowej zależy od wielu czynników - m.in.
          stopnia złożoności projektu, projektu graficznego, liczby podstron,
          treści oraz dodatkowych funkcjonalności. Każdą realizację wyceniamy
          indywidualnie, po analizie potrzeb i oczekiwań klienta. Umów się z
          nami na bezpłatną konsultację, a przygotujemy wycenę Twojej strony www
          dopasowaną do budżetu i celów biznesowych.
        </p>
      </div>
      <div>
        <ContactButton className={s.oferButton}  toggleForm={() => console.log('Form toggled')} />
      </div>

    </div>
  );
};

export default OferSectionComponent;
