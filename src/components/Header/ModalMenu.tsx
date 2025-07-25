import Hamburger from "hamburger-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import s from "./ModalMenu.module.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import ContactButton from "../ContactButton/ContactButton";

const ModalMenu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleBackdropClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div>
      <div className={s.burgerWrapper}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
      </div>
      {
        <div
          className={clsx(s.modalOverlay, isOpen && s.modalOverlayActive)}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          onClick={handleBackdropClick}
        >
          <div className={s.modalContent}>
            <ul className={s.modalNavList}>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  Our works
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <SocialIcons isOpen = {isOpen}/>
          <ContactButton isOpen = {isOpen} />
        </div>
      }
    </div>
  );
};

export default ModalMenu;
