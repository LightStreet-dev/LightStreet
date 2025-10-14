import s from "./ContactSectionComponent.module.css"
import ShortFormComponent from "./ShortFormComponent"

const ContactSectionComponent = () => {
  return (
    <div className={s.contactWrapper}>
<div className="container">
    <h2 className={s.contactTitle}>Kontakt</h2>
    <p className={s.contactText}>Wypełnij krótki formularz, a nasz menedżer skontaktuje się z Tobą, by doradzić najlepsze rozwiązanie dopasowane do Twoich potrzeb</p>
</div>
<div className="container">
<ShortFormComponent/>
</div>

    </div>
  )
}

export default ContactSectionComponent