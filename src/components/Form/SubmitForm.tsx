
import clsx from "clsx";
import { useId } from "react";
import s from "./SubmitForm.module.css";
import { MdClose } from "react-icons/md";
import { Field, Form, Formik } from "formik";

type FormValue = {
  name: string;
  company:string;
  telephone: string;
  email:string;
  text:string;
  agree: boolean;

};
interface sabmitFormProps {
  openForm: boolean
  setOpenForm: (open: boolean) => void
}

const SubmitForm: React.FC<sabmitFormProps> = ({openForm, setOpenForm}) => {
const id = useId()
  const initialValues: FormValue = {
    name: "",
    company:"",
    telephone:"",
    email:"",
    text:"",
    agree: false,

  };
  const handleSubmit = (
    values: FormValue,
    actions: import("formik").FormikHelpers<FormValue>
  ) => {
    console.log(values);
    actions.resetForm();
    setOpenForm(false)
  };
  const handelCloseForm = (evt: React.MouseEvent<HTMLDivElement>) =>{
    if(evt.target===evt.currentTarget){
      setOpenForm(false)
    }
  }


  return (
    
    <div
      className={clsx(s.modalFormOverlay, openForm && s.modalFormOverlayActive)}
      onClick={handelCloseForm}
    >
      <div className={s.formWrapper}>
        <MdClose size={24} className={s.closeFormBtn} onClick={()=> setOpenForm(false)}/>
          <h2 className={s.formHeader}>Contact us</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className={s.form}>
            <div className={s.fieldWrapper}>
            <Field className={s.fieldStyle} id={id} placeholder=' '  name="name" />
            <label className={s.labelForm} htmlFor={id}>Name</label>
            </div>
            <div className={s.fieldWrapper}>
            <Field className={s.fieldStyle} placeholder=' ' name="company" />
            <label className={s.labelForm} htmlFor={id}>Company</label>
            </div>
           <div className={s.fieldWrapper}>
            <Field className={s.fieldStyle} placeholder=' ' name="phone" />
            <label className={s.labelForm} htmlFor={id}>Phone</label>
            </div>
            <div className={s.fieldWrapper}>
            <Field className={s.fieldStyle} placeholder=' ' name="email" />
            <label className={s.labelForm} htmlFor={id}>Email</label>
            </div>
             <div className={s.fieldWrapper}>
            <Field className={s.fieldStyle} placeholder=' ' as='textarea' name='text' id={id}/> 
            <label className={s.labelFormTextArea} htmlFor={id}>Text</label>
            </div>
            <label className={s.checkbox}>
              <Field type='checkbox' name='agree'/>
              
              <span className={s.checkboxText}>I agree all rules </span>
              </label>
            
            <button className={s.submitBtn} disabled={!values.agree} type="submit">Send</button>
          </Form>
        )}
      </Formik>
      </div>
    </div>
  );
};

export default SubmitForm;
