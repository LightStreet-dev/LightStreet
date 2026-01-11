import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// EN
import enTranslation from './locales/en/translation.json'
import enForm from './locales/en/formTranslation.json'

// UK
import ukTranslation from './locales/uk/translation.json'
import ukForm from './locales/uk/formTranslation.json'

// PL
import plTranslation from './locales/pl/translation.json'
import plForm from './locales/pl/formTranslation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
        formTranslation: enForm,
      },
      uk: {
        translation: ukTranslation,
        formTranslation: ukForm,
      },
      pl: {
        translation: plTranslation,
        formTranslation: plForm,
      },
    },

    fallbackLng: 'en',
    supportedLngs: ['en', 'uk', 'pl'],
    load: 'languageOnly',

    ns: ['translation', 'formTranslation'],
    defaultNS: 'translation',

    detection: {
      order: ['localStorage', 'querystring', 'navigator'],
      caches: ['localStorage'],
      lookupQuerystring: 'lng',
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false, // ✅ стабільно для iPhone
    },
  })

export default i18n
