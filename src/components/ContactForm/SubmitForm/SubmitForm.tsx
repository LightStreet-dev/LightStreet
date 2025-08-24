import clsx from "clsx";

import s from "./SubmitForm.module.css";
import { MdClose } from "react-icons/md";
import { Field, Form, Formik } from "formik";
import InputComponent from "../InputComponent/InputComponent";
import { useEffect } from "react";
// Хак для autofill на iPhone/Chrome
  useEffect(() => {
    const fields = formRef.current.querySelectorAll(".fieldStyle");

    fields.forEach((field) => {
      setTimeout(() => {
        if (field.matches(":-webkit-autofill") || field.value) {
          const val = field.value;
          field.value = "";
          field.value = val;
          field.classList.add("filled-autofill");
        }
      }, 100);
    });
  }, []);
type FormValue = {
  Name: string;
  Company: string;
  Phone: string;
  Email: string;
  Text: string;
  agree: boolean;
};
interface sabmitFormProps {
  openForm: boolean;
  setOpenForm: (open: boolean) => void;
}

const SubmitForm: React.FC<sabmitFormProps> = ({ openForm, setOpenForm }) => {
  
  const initialValues: FormValue = {
    Name: "",
    Company: "",
    Phone: "",
    Email: "",
    Text: "",
    agree: false,
  };
  const handleSubmit = (
    values: FormValue,
    actions: import("formik").FormikHelpers<FormValue>
  ) => {
    console.log(values);
    actions.resetForm();
    setOpenForm(false);
  };
  const handelCloseForm = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      setOpenForm(false);
    }
  };

  return (
    <div
      className={clsx(s.modalFormOverlay, openForm && s.modalFormOverlayActive)}
      onClick={handelCloseForm}
    >
      <div className={s.formWrapper}>
        <MdClose
          size={24}
          className={s.closeFormBtn}
          onClick={() => setOpenForm(false)}
        />
        <h2 className={s.formHeader}>Contact us</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form className={s.form}>
              <InputComponent name="Name" as="input" type="text" />
              <InputComponent name="Company" as="input" type="text" />
              <InputComponent name="Phone" as="input" type="number" />
              <InputComponent name="Email" as="input" type="text" />
              <InputComponent name="Text" as="textarea" type="text" />
              <label className={s.checkbox}>
                <Field type="checkbox" name="agree" />
                <span className={s.checkboxText}>I agree all rules </span>
              </label>

              <button
                className={s.submitBtn}
                disabled={!values.agree}
                type="submit"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SubmitForm;
