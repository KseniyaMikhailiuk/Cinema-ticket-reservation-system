import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import detector from "i18next-browser-languagedetector";

import translationEN from './services/locales/en/translation.json';
import translationRU from './services/locales/ru/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};


i18n
    .use(detector)
    .use(reactI18nextModule)
    .init({
        resources,
        lng: "ru",
        fallbackLng: "ru",
        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });



export default i18n;