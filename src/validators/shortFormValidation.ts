import * as Yup from "yup";
import i18n from "../i18n";

const t = i18n.t.bind(i18n);

const letterValidation = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻА-Яа-яЁёІіЇїЄєҐґ]+$/;
const phoneValidation = /^\+?\d{1,15}$/;

const shortFormSchema = Yup.object().shape({
  Name: Yup.string()
    .required(() => t("formTranslation:errors.error"))
    .matches(letterValidation, () => t("formTranslation:errors.onlyLetters"))
    .min(3, () => t("formTranslation:errors.min"))
    .max(20, () => t("formTranslation:errors.max")),

  Phone: Yup.string()
    .required(() => t("formTranslation:errors.error"))
    .matches(phoneValidation, () => t("formTranslation:errors.phone")),
});

export default shortFormSchema;
