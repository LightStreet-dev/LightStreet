import ContactButton from "../../ContactButton/ContactButton";
import Logo from "../../Logo/Logo";
import NavLinks from "../NavLins/NavLinks";
import SocialIcons from "../../SocialIcons/SocialIcons";
import s from "./Header.module.css";
import LanguageChanger from "../LanguageChanger/LanguageChanger";

import ModalMenu from "../ModalMenu/ModalMenu";
interface HeaderProps {
  mobMediaQuery: boolean;
  toggleForm: ()=> void;
}
const Header: React.FC<HeaderProps> = ({ mobMediaQuery, toggleForm }) => {
  return (
    <header className={s.header}>
   <div className={s.headerWrapper} >
      <Logo />

      {mobMediaQuery ? (
        <div className={s.modalWraper}>
          <LanguageChanger />
          <ModalMenu toggleForm={toggleForm} />
        </div>
      ) : (
        <>
          <NavLinks />
          <div className={s.mainHeaderWrapper}>
            <div className={s.socialContactWrapper}>
              <SocialIcons />
            </div>

            <>
              <LanguageChanger /> <ContactButton toggleForm={toggleForm} />
            </>
          </div>
        </>
      )}
      </div>
    </header>
  );
};

export default Header;
