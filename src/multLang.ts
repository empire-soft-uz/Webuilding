import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      uz: {
        translation: uz,
      },
      ru: {
        translation: ru,
      },
    },
    lng: "ru",
  });
