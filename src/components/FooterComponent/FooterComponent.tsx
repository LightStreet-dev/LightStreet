import NavLinks from "../HeaderSection/NavLins/NavLinks";
import SocialIcons from "../SocialIcons/SocialIcons";
import s from "./FooterComponent.module.css";

const FooterComponent = () => {
  return (
    <section className="container">
      <div className={s.footerWrapper}>
        <div className={s.footerNavWrap}>
          <NavLinks footerNavigation={s.footerNav} />
        </div>

        <h2 className={s.footerText}>
          Zbuduj z nami <br />
          <span className={s.markText}>swoją przewagę</span> <br /> online
        </h2>
        <div className={s.footerSocWrap}>
          <SocialIcons footerStyle ={s.footerSocIcon} footerStyleList ={s.footerStyleList} />
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
