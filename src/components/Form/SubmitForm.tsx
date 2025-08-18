
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
}
const SubmitForm: React.FC<sabmitFormProps> = ({openForm}) => {
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
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className={s.form}>
            <Field placeholder='name' name="name" />
            <Field placeholder='company' name="company" />
            <Field placeholder='telephone' name="telephone" />
            <Field placeholder='email' name="email" />
            <Field placeholder='text' as='textarea' name='text'/>
            <label>
              <Field type='checkbox' name='agree'/>
              I agree
              </label>
            
            <button disabled={!values.agree} type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubmitForm;
