import clsx from 'clsx';
import s from './NavLinks.module.css'
import { useTranslation } from 'react-i18next'
interface navProps{
  footerNavigation: string  
}
const  NavLinks:React.FC<navProps> =({footerNavigation}) => {
      const {t} = useTranslation();
    return(
        <ul className={clsx(s.navigation, footerNavigation )}>
            <li><a className={s.navItem} href="#">{t("header.about")}</a></li>
            <li><a href="#">{t("header.ourWorks")}</a></li>
            <li><a href="#">{t("header.contact")}</a></li>
        </ul>
    )
}
export default NavLinks;