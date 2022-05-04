import i18n from 'i18next';
import { Language } from "./Language";
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translations.json';
import frTranslations from './locales/fr/translations.json';

i18n.use(initReactI18next).init({
  fallbackLng: Language.fr,
  lng: Language.fr,
  resources: {
    fr: {
      translations: frTranslations
    },
    en: {
      translations: enTranslations
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = [Language.fr, Language.en];

export default i18n;