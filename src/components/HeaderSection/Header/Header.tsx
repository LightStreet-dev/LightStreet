import ContactButton from "../../ContactButton/ContactButton";
import Logo from "../../Logo/Logo";
import NavLinks from "../NavLins/NavLinks";
import SocialIcons from "../../SocialIcons/SocialIcons";
import s from "./Header.module.css";
import LanguageChanger from "../LanguageChanger/LanguageChanger";
import ModalMenu from "../ModalMenu/ModalMenu";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import headerAnimation from "../../animation/headerAnimation";

interface HeaderProps {
  mobMediaQuery: boolean;
  toggleForm:  (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  setOpenForm:React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<HeaderProps> = ({ mobMediaQuery, toggleForm, setOpenForm }) => {
  
 const headerContainer = useRef<HTMLDivElement | null>(null);
const headerContent = useRef<HTMLDivElement | null>(null);
 useGSAP(
    () => {
 if (!headerContainer.current || !headerContent.current) return;
headerAnimation(headerContainer.current,headerContent.current )
 
});

  return (
    <header className={s.header} ref={headerContainer}>
      <div className={s.headerWrapper} ref={headerContent}>
        <Logo />

        {mobMediaQuery ? (
          <div className={s.modalWraper}>
            <LanguageChanger />
            <ModalMenu toggleForm={toggleForm} setOpenForm={setOpenForm} />
          </div>
        ) : (
          <>
            <NavLinks />
            <div className={s.mainHeaderWrapper}>
              <div className={s.socialContactWrapper}>
                <SocialIcons />
              </div>

              <div className={s.groupWrapper}>
                <LanguageChanger /> <ContactButton toggleForm={toggleForm} setOpenForm={setOpenForm} />
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
