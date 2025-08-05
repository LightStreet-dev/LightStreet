import clsx from 'clsx'
import s from './ContactButton.module.css'
import { useTranslation } from 'react-i18next'

interface contactButton{
  isOpen?: boolean
  setOpen?: (value: boolean) => void 
}
const ContactButton:React.FC<contactButton> = ({isOpen, setOpen}) => {
      const {t} = useTranslation();
  return (
    <div>
        <button className={clsx(s.contactbtn, isOpen && s.modalContactBtn )} onClick={() => setOpen?.(false)}>{t("header.contactButton")}</button>
    </div>
  )
}

export default ContactButton