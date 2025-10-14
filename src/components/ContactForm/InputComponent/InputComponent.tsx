import { Field } from 'formik'
import s from './InputComponent.module.css'
import { useId } from 'react'
import clsx from 'clsx'
interface inputProps {
    name:string
    as:string
    type:string
    altDesing?:string
    labelClassName?:string
}
const InputComponent:React.FC<inputProps> = ({name,as,type, altDesing, labelClassName}) => {
    const id = useId()
  return (
    
         <div className={s.fieldWrapper}>
            <Field className={clsx(s.fieldStyle, altDesing )} as={as} type={type} id={id} placeholder=' '  name={name} />
            <label className={clsx( s.labelForm, type==="textarea" && s.labelFormTextArea, labelClassName)} htmlFor={id}>{name}</label>
            </div>
    
  )
}

export default InputComponent