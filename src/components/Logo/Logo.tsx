import s from './Logo.module.css'
function Logo() {
    return(
        <a className={s.logoWrapper}>
            <img className={s.logoImg} src="/img/LSLogo.png" alt="Logo" />
            <h2 className={s.logo}>Light  Street</h2>
        </a>
    )
}
export default Logo;