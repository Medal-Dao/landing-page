import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation_cn from "./locales/cn/translation.json";
import translation_en from "./locales/en/translation.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        common: translation_en               // 'common' is our custom namespace
    },
    cn: {
        common: translation_cn
    }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

     // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;