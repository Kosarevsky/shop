import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LanguageType } from '../../types/languageType';
import English from '../../locale/en.json'
import Polish from '../../locale/pl.json'
import Russian from '../../locale/ru.json'

const resources = {
  en: {
    translation: English,
  },
  pl: {
    translation: Polish,
  },
  ru: {
    translation: Russian,
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: LanguageType.EN,
    debug: false,
    detection: {
    order: ['localStorage'],
    caches: ['localStorage'],
},
    interpolation: {
      escapeValue: false, 
    },
  });
export default i18n;
