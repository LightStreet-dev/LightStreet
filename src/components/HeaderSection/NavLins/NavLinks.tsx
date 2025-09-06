import s from './NavLinks.module.css'
import { useTranslation } from 'react-i18next'
const  NavLinks:React.FC =() => {
      const {t} = useTranslation();
    return(
        <ul className={s.navigation}>
            <li><a className={s.navItem} href="#">{t("header.about")}</a></li>
            <li><a href="#">{t("header.ourWorks")}</a></li>
            <li><a href="#">{t("header.contact")}</a></li>
        </ul>
    )
}
export default NavLinks;