
import clsx from "clsx";
import s from "./SubmitForm.module.css";
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
  console.log(openForm)
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
        <p className={s.closeFormBtn} onClick={handelCloseForm}>X</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className={s.form}>
            <Field className={s.fieldStyle} placeholder='name' name="name" />
            <Field className={s.fieldStyle} placeholder='company' name="company" />
            <Field className={s.fieldStyle} placeholder='telephone' name="telephone" />
            <Field className={s.fieldStyle} placeholder='email' name="email" />
            <Field className={s.fieldStyle} placeholder='text' as='textarea' name='text'/>
            <label>
              <Field type='checkbox' name='agree'/>
              I agree
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
