import { useCallback } from "react";
import { useAppModals } from "./ModalsProvider";
import { useEscapeKey } from "../../Hooks/useEscapeKey";
import { AdvertisingNowContainer } from "./Modals.styles";
import { CloseIcon } from "../../assets/icons";

const Advertising = () => {
  const appModals = useAppModals();

  const onCloseModal = useCallback(() => {
    appModals?.hide();
  }, [appModals]);

  useEscapeKey({
    callback: onCloseModal,
  });
  return (
    <AdvertisingNowContainer
      className={
        appModals?.state.advertising.active &&
        !appModals?.state.advertising.neverWork
          ? "active"
          : "none"
      }
    >
      <div className="imageBox">
        <div className="image">
          <img
            src="https://domtut.uz/resources/uploads/property/brooklyn/main_0.jpg?r=1680001336"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <button className="closeBtn" onClick={onCloseModal}>
          <CloseIcon />
        </button>
      </div>

      <div className="cancel_window" onClick={onCloseModal} />
    </AdvertisingNowContainer>
  );
};
export default Advertising;
