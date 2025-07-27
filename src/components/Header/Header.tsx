import ContactButton from "../ContactButton/ContactButton";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLins/NavLinks";
import SocialIcons from "../SocialIcons/SocialIcons";
import s from "./Header.module.css";
import LanguageChanger from "./LanguageChanger";

import ModalMenu from "./ModalMenu";
interface HeaderProps {
  mediaQuery: boolean;
}
const Header: React.FC<HeaderProps> = ({ mediaQuery }) => {
  return (
    <header className={s.header}>
      <Logo />
  <LanguageChanger/>
      {mediaQuery ? (
        <ModalMenu />
      ) : (
        <>
          <NavLinks />
          
          <div className={s.socialContactWrapper}>
            <SocialIcons />  <ContactButton />
          </div>
        </>
      )}
      
    </header>
  );
};

export default Header;
