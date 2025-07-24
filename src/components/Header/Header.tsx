import Logo from "../Logo/Logo";
import NavLinks from "../NavLins/NavLinks";
import s from "./Header.module.css";
import ModalMenu from "./ModalMenu";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Logo />
      <ModalMenu />
    </header>
  );
};

export default Header;
