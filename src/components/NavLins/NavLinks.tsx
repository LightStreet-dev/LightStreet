import s from './NavLinks.module.css'

const  NavLinks:React.FC =() => {
    return(
        <ul className={s.navigation}>
            <li><a href="#">About</a></li>
            <li><a href="#">Our works</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    )
}
export default NavLinks;