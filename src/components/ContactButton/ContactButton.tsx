import clsx from 'clsx'
import s from './ContactButton.module.css'


interface contactButton{
  isOpen?: boolean
  setOpen?: (value: boolean) => void 
}
const ContactButton:React.FC<contactButton> = ({isOpen, setOpen}) => {
  return (
    <div>
        <button className={clsx(s.contactbtn, isOpen && s.modalContactBtn )} onClick={() => setOpen?.(false)}>Consultation</button>
    </div>
  )
}

export default ContactButton