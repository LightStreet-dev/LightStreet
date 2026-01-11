import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export const i18nReady = new Promise<void>((resolve) => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(
      {
        fallbackLng: 'en',
        
        load: 'languageOnly',

        ns: ['translation', 'formTranslation'],
        defaultNS: 'translation',

        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        detection: {
          order: ['localStorage', 'querystring', 'navigator'],
          caches: ['localStorage'],
          lookupQuerystring: 'lng',
        },

        interpolation: {
          escapeValue: false,
        },

        react: {
          useSuspense: false, // 🔴 важливо
        },
         initImmediate: false,
      },
      () => {
        // 👇 тут мова ВЖЕ визначена і JSON завантажені
        resolve()
      }
    )
})


export default i18n;
