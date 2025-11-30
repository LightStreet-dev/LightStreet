
import s from "./HeroButton.module.css"
import { useTranslation } from "react-i18next";
import scrollToId from "../../../animation/scroll"
const HeroButton = () => {
    const {t} = useTranslation();
  return (
    <div>
         <button className={s.heroBatton} type="button" onClick={() => scrollToId("ourWorks")}>
      {t("hero.heroBtn")}
       </button>
    </div>
  )
}

export default HeroButton