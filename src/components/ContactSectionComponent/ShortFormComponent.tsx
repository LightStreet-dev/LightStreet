import s from "./ShortFormComponent.module.css";
import { Form, Formik } from "formik";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import InputComponent from "../ContactForm/InputComponent/InputComponent";
import shortFormSchema from "../../validators/shortFormValidation";

type shortFormValue = {
  Name: string;
  Phone: string;
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
    actions: import("formik").FormikHelpers<shortFormValue>
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
    } finally {
      actions.setSubmitting(false);

      actions.resetForm();
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={sendEmail}
        validationSchema={shortFormSchema}
      >
        {({ isSubmitting }) => (
          <Form ref={shortFormRef}>
            <div className={s.inputWrapper}>
              <InputComponent
                labelClassName={s.labelStyle}
                altDesing={s.inputStyle}
                name="Name"
                as="input"
                type="text"
                label={t("formTranslation:formPlaseholders.name")}
              />
              <InputComponent
                labelClassName={s.labelStyle}
                altDesing={s.inputStyle}
                name="Phone"
                as="input"
                type="number"
                label={t("formTranslation:formPlaseholders.telefon")}
              />
              <button
                className={s.submitBtn}
                disabled={isSubmitting}
                type="submit"
              >
                 {isSubmitting ? t("formTranslation:button.sending") : t("formTranslation:button.send")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShortFormComponent;
