import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const deviceLanguage = getLocales()[0].languageCode;

export const languageResources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: deviceLanguage,
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
