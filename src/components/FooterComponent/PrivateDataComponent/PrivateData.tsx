import { useEffect } from "react";
import s from "./PrivteData.module.css";
import clsx from "clsx";

interface PrivatModalProps {
  toggleModal: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
  openLink: boolean;
  setOpenLink: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrivateData:React.FC<PrivatModalProps>= ({toggleModal, openLink,setOpenLink }) => {


  const handleBackdropClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      setOpenLink(false);
    }
  };
  useEffect(() => {
    if (openLink) {
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openLink]);

  return (
    <div className={clsx(s.privateOverlay, openLink && s.privateOverlayActive)} 
    style={{ pointerEvents: openLink ? "auto" : "none" }}onClick={handleBackdropClick}>
      <div className={s.privateContent}>
        <button
          onClick={()=>toggleModal(setOpenLink)}
          style={{ fontSize: 35 }}
        >
          X
        </button>
        <p className={s.provateText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          laudantium officia expedita, labore fugiat nesciunt consequuntur earum
          pariatur maxime facilis vero quo cum ullam eos delectus necessitatibus
          ea quos iste.
        </p>
      </div>
    </div>
  );
};

export default PrivateData;
