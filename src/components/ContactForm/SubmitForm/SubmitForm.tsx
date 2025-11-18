import clsx from "clsx";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "./SubmitForm.module.css";
import { MdClose } from "react-icons/md";
import { ErrorMessage, Field, Form, Formik } from "formik";
import InputComponent from "../InputComponent/InputComponent";
import { useTranslation } from "react-i18next";
import mainFormSchema from "../../../validators/mainFormValidation";
type FormValue = {
  Name: string;
  Company: string;
  Phone: string;
  Email: string;
  Text: string;
  agree: boolean;
};

interface SubmitFormProps {
  openForm: boolean;
  setOpenForm: (open: boolean) => void;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ openForm, setOpenForm }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const initialValues: FormValue = {
    Name: "",
    Company: "",
    Phone: "",
    Email: "",
    Text: "",
    agree: false,
  };

  const sendEmail = async (
    values: FormValue,
    actions: import("formik").FormikHelpers<FormValue>
  ) => {
    if (!formRef.current) return;
    const confirmMail = t("formReply.reply");
    const mailTitle = t("formReply.title");
    const mailVelcome = t("formReply.velcome");
    const mailSignOne = t("formReply.signatureOne");
    const mailSignTwo = t("formReply.signatureTwo");
    try {
      //  Надіслати лист адміністратору
      Promise.all([
        emailjs.sendForm(
          "service_b9158j4",
          "template_3o02fkr",
          formRef.current,
          "WfwuYGLBQ1Q_uC7jX"
        ),
        emailjs.send(
          "service_b9158j4",
          "template_5or214p",
          {
            name: values.Name,
            email: values.Email,
            confirmation: confirmMail,
            title: mailTitle,
            velcome: mailVelcome,
            signatureOne: mailSignOne,
            signatureTwo: mailSignTwo,
          },
          "WfwuYGLBQ1Q_uC7jX"
        ),
      ]);

      console.log("SUCCESS! Emails sent.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("FAILED...", error.message);
      } else {
        console.log("FAILED...", error);
      }
    } finally {
      actions.setSubmitting(false);
      setOpenForm(false);
      actions.resetForm();
    }
  };

  const handleCloseForm = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) {
      setOpenForm(false);
    }
  };

  return (
    <div
      className={clsx(s.modalFormOverlay, openForm && s.modalFormOverlayActive)}
      onClick={handleCloseForm}
    >
      <div className={s.formWrapper}>
        <MdClose
          size={24}
          className={s.closeFormBtn}
          onMouseDown={() => setOpenForm(false)}
        />
        <h2 className={s.formHeader}>Contact us</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={sendEmail}
          validationSchema={mainFormSchema}
        >
          {({ values, isSubmitting }) => (
            <Form ref={formRef} className={s.form}>
              <div className={s.inputWrapper}>
                <InputComponent name="Name" as="input" type="text" />
                <ErrorMessage className={s.error} name="Name" component="p" />
              </div>
              <div className={s.inputWrapper}>
                <InputComponent name="Company" as="input" type="text" />
                <ErrorMessage className={s.error} name="Company" component="p" />
              </div>
              <div className={s.inputWrapper}>
                <InputComponent name="Phone" as="input" type="number" />
                <ErrorMessage className={s.error} name="Phone" component="p" />
              </div>
              <div className={s.inputWrapper}>
                <InputComponent name="Email" as="input" type="text" />
                <ErrorMessage className={s.error} name="Email" component="p" />
              </div>
              <div className={s.inputWrapper}>
                <InputComponent name="Text" as="textarea" type="text" />
                <ErrorMessage className={s.error} name="Text" component="p" />
              </div>
              <label className={s.checkbox}>
                <Field type="checkbox" name="agree" />
                <span className={s.checkboxText}>I agree all rules </span>
           
              </label>

              <button
                className={s.submitBtn}
                disabled={!values.agree || isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SubmitForm;
