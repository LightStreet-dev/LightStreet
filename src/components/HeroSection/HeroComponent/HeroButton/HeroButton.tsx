
import s from "./HeroButton.module.css"
import { useTranslation } from "react-i18next";

const HeroButton = () => {
    const {t} = useTranslation();
  return (
    <div>
         <button className={s.heroBatton} type="button">
      {t("hero.heroBtn")}
       </button>
    </div>
  )
}

export default HeroButton