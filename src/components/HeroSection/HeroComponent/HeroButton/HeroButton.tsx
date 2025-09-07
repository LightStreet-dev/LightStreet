import { t } from "i18next"
import s from "./HeroButton.module.css"

const HeroButton = () => {
  return (
    <div>
         <button className={s.heroBatton} type="button">
      {t("hero.heroBtn")}
       </button>
    </div>
  )
}

export default HeroButton