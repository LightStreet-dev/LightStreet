import s from "./ContactSectionComponent.module.css"
import ShortFormComponent from "./ShortFormComponent"
import { useTranslation } from "react-i18next";

const ContactSectionComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={s.contactWrapper}>
<div className="container">
    <h2 className={s.contactTitle}>{t("ContactSection.title")}</h2>
    <p className={s.contactText}>{t("ContactSection.text")}</p>
</div>
<div className="container">
<ShortFormComponent/>
</div>

    </div>
  )
}

export default ContactSectionComponent