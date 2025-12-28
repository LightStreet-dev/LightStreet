import s from "./ShortFormComponent.module.css";
import { ErrorMessage, Form, Formik } from "formik";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import InputComponent from "../ContactForm/InputComponent/InputComponent";
import shortFormSchema from "../../validators/shortFormValidation";
import toast, { Toaster } from "react-hot-toast";
import ConsentToast from "../Toasts/ConsentToast";
import AutoClearErrorsComponent from "../AutoClearErrorsComponent/AutoClearErrorsComponent";
type shortFormValue = {
  Name: string;
  Phone: string;
};
const notifyConsent = (onAccept: () => void, onDecline: () => void) => {
  toast(
    <ConsentToast
      closeToast={toast.dismiss}
      sendEmail={onAccept}
      onDecline={onDecline}
    />,
    {
      duration: Infinity,
       position: 'bottom-center',
      style: {
maxWidth: '520px',
width:"100%",
        padding: '0', // важливо, щоб не заважало внутрішньому стилю
        background: 'transparent', // фон керується в компоненті
        boxShadow: 'none',
      },
    }
  );
};

const ShortFormComponent: React.FC = () => {
  const shortFormRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation(["translation", "formTranslation"]);
  const initialValues: shortFormValue = {
    Name: "",
    Phone: "",
  };
  const sendEmail = async (
    values: shortFormValue,
    // actions: import("formik").FormikHelpers<shortFormValue>
  ) => {
    try {
      if (!shortFormRef.current) return;

      await emailjs
        .send(
          "service_8lry4ov",
          "template_7z2h40f",
          {
            name: values.Name,
            phone: values.Phone,
          },
          "DL-X4Ig0PYNtnqTUb"
        )
        .then(() => {});
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("FAILED...", error.message);
      } else {
        console.log("FAILED...", error);
      }
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);

          notifyConsent(
            () => {
              sendEmail(values); // 👈 onAccept
              actions.setSubmitting(false);
              actions.resetForm();
            },
            () => {
              actions.resetForm(); // 👈 onDecline
              actions.setSubmitting(false);
            }
          );
        }}
        validationSchema={shortFormSchema}
      >
        {({ isSubmitting}) => (
       
          <Form ref={shortFormRef}>
               <AutoClearErrorsComponent delay={2000}/>
            <div className={s.inputWrapper}>
              <div className={s.nameInput}>
              <InputComponent
                labelClassName={s.labelStyle}
                altDesing={s.inputStyle}
                name="Name"
                as="input"
                type="text"
                label={t("formTranslation:formPlaseholders.name")}
              />
               <ErrorMessage className={s.error} name="Name" component="p" />
               </div>
               <div className={s.phoneInput}>
              <InputComponent
                labelClassName={s.labelStyle}
                altDesing={s.inputStyle}
                name="Phone"
                as="input"
                type="number"
                label={t("formTranslation:formPlaseholders.telefon")}
              />
               <ErrorMessage className={s.error} name="Phone" component="p" />
               </div>
              <button
                className={s.submitBtn}
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting
                  ? t("formTranslation:button.sending")
                  : t("formTranslation:button.send")}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <Toaster />
    </div>
  );
};

export default ShortFormComponent;
