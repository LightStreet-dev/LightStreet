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
          <SocialIcons
            footerStyle={s.footerSocIcon}
            footerStyleList={s.footerStyleList}
          />
        </div>
        <div className={s.footerInfo}>
          <p className={s.ownerInfo}>Use of materials is permitted only with the project owner’s consent.</p>
         <div className={s.righsWrapper}>
            <p className={s.rulesInfo}>© 2025 All rights reserved.</p>
            <a className={s.privatePolice} href="#">link</a>
         </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
