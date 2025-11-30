import { useMediaQuery } from "react-responsive";
import NavLinks from "../HeaderSection/NavLins/NavLinks";
import SocialIcons from "../SocialIcons/SocialIcons";
import s from "./FooterComponent.module.css";
import { useTranslation } from "react-i18next";

interface PrivatModalProps {
 toggleModal: (setter: React.Dispatch<React.SetStateAction<boolean>>) => void;
setOpenLink: React.Dispatch<React.SetStateAction<boolean>>;
}
const FooterComponent: React.FC<PrivatModalProps> = ({ toggleModal,setOpenLink }) => {
  const { t } = useTranslation();
  const mobSize = useMediaQuery({ maxWidth: 768 });
  return (
    <section className={s.footerSection}>
      <div className="container">
        <div className={s.footerWrapper}>
          <div className={s.footerNavWrap}>
            <NavLinks footerNavigation={s.footerNav} />
            {mobSize ? null : (
              <SocialIcons
                footerStyle={s.footerSocIcon}
                footerStyleList={s.footerStyleList}
              />
            )}
          </div>

          <h2 className={s.footerText}>
            {t("footer.title1")} <br />
            <span className={s.markText}>
              {" "}
              {t("footer.title2")}
            </span> <br /> {t("footer.title3")}
          </h2>
          <div className={s.footerSocWrap}>
            {mobSize && (
              <SocialIcons
                footerStyle={s.footerSocIcon}
                footerStyleList={s.footerStyleList}
              />
            )}
          </div>
          <div className={s.footerInfo}>
            <p className={s.ownerInfo}> {t("footer.ownerInfo")}</p>
            <div className={s.righsWrapper}>
              <p className={s.rulesInfo}>{t("footer.privatePolice")}</p>
              <button className={s.privatePolice} onClick={()=>toggleModal((setOpenLink))}>
                {t("footer.link")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
