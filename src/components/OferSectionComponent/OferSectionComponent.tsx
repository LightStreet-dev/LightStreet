import ContactButton from "../ContactButton/ContactButton";
import s from "./OferSectionComponent.module.css";
import OfersListComponent from "./OfersListComponent/OfersListComponent";


interface modalProps {
  toggleForm: ()=> void
}
const OferSectionComponent: React.FC<modalProps> = ({toggleForm}) => {
  return (
    <div className={`container ${s.oferContainer}`}>
      <div>
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
      <div className={s.oferBtnWrap}>
        <ContactButton className={s.oferButton}  toggleForm={toggleForm} />
      </div>
      </div>
      <OfersListComponent/>

    </div>
  );
};

export default OferSectionComponent;
