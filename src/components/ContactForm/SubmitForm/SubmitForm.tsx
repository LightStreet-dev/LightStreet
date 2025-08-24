import clsx from "clsx";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import s from "./SubmitForm.module.css";
import { MdClose } from "react-icons/md";
import { Field, Form, Formik } from "formik";
import InputComponent from "../InputComponent/InputComponent";

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

  const initialValues: FormValue = {
    Name: "",
    Company: "",
    Phone: "",
    Email: "",
    Text: "",
    agree: false,
  };

  const detectUserLang = () => {
    const userLang = navigator.language
    if (userLang.startsWith("uk")) return "uk";
    if (userLang.startsWith("pl")) return "pl";
    return "en"; // дефолт
  };

  const sendEmail = async (
    values: FormValue,
    actions: import("formik").FormikHelpers<FormValue>
  ) => {
    if (!formRef.current) return;

    const lang = detectUserLang();

    const confirmationMessages: Record<string, string> = {
      en: "Thank you! We received your request and will contact you soon.",
      uk: "Дякуємо! Ми отримали вашу заявку та незабаром зв'яжемося з вами.",
      pl: "Dziękujemy! Otrzymaliśmy Twoje zgłoszenie i wkrótce się skontaktujemy.",
    };

    const confirmationText = confirmationMessages[lang];

    try {
      // 1️⃣ Надіслати лист адміністратору
      await emailjs.sendForm(
        "service_b9158j4",
        "template_3o02fkr",
        formRef.current,
        "WfwuYGLBQ1Q_uC7jX"
      );

      // 2️⃣ Надіслати підтвердження користувачу
      await emailjs.send(
        "service_b9158j4",
        "template_5or214p", // шаблон для користувача
        {
          name: values.Name,
          email: values.Email,
          confirmation: confirmationText,
        },
        "WfwuYGLBQ1Q_uC7jX"
      );

      console.log("SUCCESS! Emails sent.");
      actions.resetForm();
      setOpenForm(false);
    } catch (error: any) {
      console.log("FAILED...", error.text || error);
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
          onClick={() => setOpenForm(false)}
        />
        <h2 className={s.formHeader}>Contact us</h2>
        <Formik initialValues={initialValues} onSubmit={sendEmail}>
          {({ values }) => (
            <Form ref={formRef} className={s.form}>
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
