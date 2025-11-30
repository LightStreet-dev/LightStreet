import Hamburger from "hamburger-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import s from "./ModalMenu.module.css";
import SocialIcons from "../../SocialIcons/SocialIcons";
import ContactButton from "../../ContactButton/ContactButton";
import { useTranslation } from "react-i18next";
import scrollToId from "../../animation/scroll";
interface modalProps {
  toggleForm: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
setOpenForm:React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMenu: React.FC<modalProps> = ({ toggleForm, setOpenForm}) => {
  const { t } = useTranslation();
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
        <Hamburger toggled={isOpen} toggle={setOpen} size={35} />
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
                <button
              
                  onClick={() => {
                    setOpen(false);
                    scrollToId("about");
                  }}
                >
                  {t("header.about")}
                </button>
              </li>
              <li>
                <button onClick={() => {
                    setOpen(false);
                    scrollToId("ourWorks");
                  }}>
                  {t("header.services")}
                </button>
              </li>
              <li>
                <button  onClick={() => {
                    setOpen(false);
                    scrollToId("contact");
                  }}>
                  {t("header.contact")}
                </button>
              </li>
            </ul>
          </div>
          <SocialIcons isOpen={isOpen} />
          <ContactButton
            isOpen={isOpen}
            setOpenForm={setOpenForm}
            toggleForm={toggleForm}
       
          />
        </div>
      }
    </div>
  );
};

export default ModalMenu;
