import * as Yup from "yup";
import i18n from "../i18n";

const t = i18n.t.bind(i18n);
const mailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const letterValidation = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻА-Яа-яЁёІіЇїЄєҐґ]+$/;
const phoneValidation = /^\+?\d{1,15}$/;

const mainFormSchema = Yup.object().shape({
  Name: Yup.string()
    .required(() => t("formTranslation.errors.error"))
    .matches(letterValidation, () => t("formTranslation.errors.onlyLetters"))
    .min(3, () => t("formTranslation.errors.min"))
    .max(20, () => t("formTranslation.errors.max")),

  Company: Yup.string()
    .min(3, () => t("formTranslation.errors.min"))
    .max(20, () => t("formTranslation.errors.max")),

  Phone: Yup.string().required(() => t("formTranslation.errors.error")).matches(phoneValidation, () => t("formTranslation.errors.phone")),

  Email: Yup.string()
    .matches(mailValidation, () => t("formTranslation.errors.mail"))

    .required(() => t("formTranslation.errors.error"))
    .min(3, () => t("formTranslation.errors.min"))
    .max(30, () => t("formTranslation.errors.maxText")),

  Text: Yup.string().max(200, () => t("formTranslation.errors.maxText")),

  checkbox: Yup.boolean(),
});

export default mainFormSchema;
