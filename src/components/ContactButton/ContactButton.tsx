import clsx from 'clsx'
import s from './ContactButton.module.css'
interface contactButton{
  isOpen?:boolean
}
const ContactButton:React.FC<contactButton> = ({isOpen}) => {
  return (
    <div>
        <button className={clsx(s.contactbtn, isOpen && s.modalContactBtn )}>Consultation</button>
    </div>
  )
}

export default ContactButton