import Hamburger from "hamburger-react";
import clsx from "clsx";
import { useState } from "react";
import s from "./ModalMenu.module.css";

const ModalMenu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div className={s.burgerWrapper}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
      </div>
      {(
        <div
          className={clsx(s.modalOverlay, isOpen && s.modalOverlayActive)}
           style={{ pointerEvents: isOpen ? "auto" : "none" }}
          onClick={() => setOpen(false)}
        >
          <div
            className={s.modalContent}
            onClick={(evt: React.MouseEvent<HTMLDivElement>) => evt.stopPropagation()}
          >
            <ul className={s.modalNavList}>
        <li><a href="#">About</a></li>
        <li><a href="#">Our works</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default ModalMenu;
