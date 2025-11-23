import * as Yup from 'yup';
import i18n from '../i18n';

const t = i18n.t.bind(i18n);

const mainFormSchema = Yup.object().shape({
  Name: Yup.string()
    .required(() => t('formTranslation:errors.error')),

  Company: Yup.string(),

  Phone: Yup.string()
    .required(() => t('formTranslation:errors.error')),

  Email: Yup.string()
    
    .required(() => t('formTranslation:errors.error')),

  Text: Yup.string(),

  checkbox: Yup.boolean(),
});

export default mainFormSchema;
