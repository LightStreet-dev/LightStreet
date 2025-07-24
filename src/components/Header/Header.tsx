import Logo from '../Logo/Logo'
import NavLinks from '../NavLins/NavLinks'
import s from './Header.module.css'
import ModalMenu from './ModalMenu'

function Header() {
 
  return (
    <header className={s.header}>
    <Logo/>
    <ModalMenu/>
    </header>
  )
}

export default Header
