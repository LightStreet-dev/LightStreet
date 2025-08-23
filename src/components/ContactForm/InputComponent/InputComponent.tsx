import { Field } from 'formik'
import s from './InputComponent.module.css'
import { useId } from 'react'
import clsx from 'clsx'
interface inputProps {
    name:string
    as:string
    type:string
}
const InputComponent:React.FC<inputProps> = ({name,as,type}) => {
    const id = useId()
  return (
    
         <div className={s.fieldWrapper}>
            <Field className={s.fieldStyle} as={as} type={type} id={id} placeholder=' '  name={name} />
            <label className={clsx( s.labelForm, type==="textarea" && s.labelFormTextArea )} htmlFor={id}>{name}</label>
            </div>
    
  )
}

export default InputComponent