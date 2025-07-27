import ContactButton from "../ContactButton/ContactButton";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLins/NavLinks";
import SocialIcons from "../SocialIcons/SocialIcons";
import s from "./Header.module.css";
import LanguageChanger from "./LanguageChanger";

import ModalMenu from "./ModalMenu";
interface HeaderProps {
  mobMediaQuery: boolean;
}
const Header: React.FC<HeaderProps> = ({ mobMediaQuery }) => {
  return (
    <header className={s.header}>
      <Logo />

      {mobMediaQuery ? (
        <div className={s.modalWraper}>
          <LanguageChanger />
          <ModalMenu />
        </div>
      ) : (
        <>
          <NavLinks />
          <div className={s.mainHeaderWrapper}>
            <div className={s.socialContactWrapper}>
              <SocialIcons />
            </div>

            <>
              <LanguageChanger /> <ContactButton />
            </>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
