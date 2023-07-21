import { useCallback, useEffect, useState } from "react";
import { useAppModals } from "./ModalsProvider";
import { useEscapeKey } from "../../Hooks/useEscapeKey";
import { LanguageNowContainer } from "./Modals.styles";
import { useTranslation } from "react-i18next";

export default function LanguageModal() {
  const appModals = useAppModals();
  const { i18n } = useTranslation();
  const onCloseModal = useCallback(
    (name?: any) => {
      appModals?.hide("language");
      i18n.changeLanguage(name);
    },
    [appModals]
  );

  useEscapeKey({
    callback: onCloseModal,
  });

  return (
    <LanguageNowContainer
      className={
        appModals?.state.language.active && !appModals?.state.language.neverWork
          ? "active"
          : "none"
      }
    >
      <div className="language">
        <div className="title">
          <h4>Tilni o'zbek tiliga o'zgartirasizmi?</h4>
          <p>Сменить язык на узбекский?</p>
        </div>
        <div className="button">
          <button onClick={() => onCloseModal("uz")} className="btn1">
            Ha/Да
          </button>
          <button onClick={() => onCloseModal("ru")} className="btn2">
            Yoq/Нет
          </button>
        </div>
      </div>
    </LanguageNowContainer>
  );
}
