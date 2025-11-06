import { useMediaQuery } from "react-responsive";
import NavLinks from "../HeaderSection/NavLins/NavLinks";
import SocialIcons from "../SocialIcons/SocialIcons";
import s from "./FooterComponent.module.css";

const FooterComponent = () => {

  const mobSize = useMediaQuery({maxWidth:768 })
  return (
    <section className={s.footerSection}>
    <div className="container">
      <div className={s.footerWrapper}>
        <div className={s.footerNavWrap}>
          <NavLinks footerNavigation={s.footerNav} />
{mobSize ? null :<SocialIcons
            footerStyle={s.footerSocIcon}
            footerStyleList={s.footerStyleList}
          />}
        </div>

        <h2 className={s.footerText}>
          Zbuduj z nami <br />
          <span className={s.markText}>swoją przewagę</span> <br /> online
        </h2>
        <div className={s.footerSocWrap}>
          {mobSize && <SocialIcons
            footerStyle={s.footerSocIcon}
            footerStyleList={s.footerStyleList}
          />}
        </div>
        <div className={s.footerInfo}>
          <p className={s.ownerInfo}>Use of materials is permitted only with the project owner’s consent.</p>
         <div className={s.righsWrapper}>
            <p className={s.rulesInfo}>© 2025 All rights reserved.</p>
            <a className={s.privatePolice} href="#">link</a>
         </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FooterComponent;
