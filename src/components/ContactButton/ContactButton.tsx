import clsx from 'clsx'
import s from './ContactButton.module.css'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'

interface contactButton{
  
  isOpen?: boolean
  setOpen?: (value: boolean) => void 
  toggleForm: () => void
  className?: string;
}

const ContactButton:React.FC<contactButton> = ({isOpen, setOpen, toggleForm, className}) => {
  const maxWidth = useMediaQuery({maxWidth:767})
      const {t} = useTranslation();
  return (
    <div>
        <button
          className={clsx(s.contactbtn, (isOpen || maxWidth) && s.modalContactBtn, className )}
          onClick={() => {
            setOpen?.(false);
            toggleForm();
          }}
         
        >
          {t("header.contactButton")} 
        </button>
    </div>
  )
}

export default ContactButton