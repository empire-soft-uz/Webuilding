import { useCallback } from "react";
import { useEscapeKey } from "../../Hooks/useEscapeKey";
import { CloseIcon } from "../../assets/icons";
import { CartFilterNowContainer } from "./Modals.styles";
import { useAppModals } from "./ModalsProvider";
import Text from "../Text/text";
import RoomsSelect from "../RoomsSelect/roomsSelect";
import PriceFilter from "../PriceFilter/priceFilter";
import SizeFilter from "../SizeFilter/sizeFilter";
import FinishTimeFilter from "../FinishTimeFilter/finishTimeFilter";
import FloorFilter from "../FloorFilter/floorFilter";

const CartFilterModal = () => {
  const appModals = useAppModals();

  const onCloseModal = useCallback(() => {
    appModals?.hide();
  }, [appModals]);

  useEscapeKey({
    callback: onCloseModal,
  });
  return (
    <CartFilterNowContainer
      className={
        appModals?.state.cartfilter.active &&
        !appModals?.state.cartfilter.active
          ? "active"
          : "none"
      }
    >
      <div className="filterBox">
        <div className="topBox">
          <div className="filterPrimary">
            <RoomsSelect />
          </div>
          <div className="filterPrimary">
            <PriceFilter label="Narxi, ming $" />
          </div>
          <div className="filterPrimary">
            <SizeFilter label="Maydoni, m²" />
          </div>
          <div className="filterPrimary">
            <FinishTimeFilter
              from={new Date()}
              to={new Date("Thu Dec 27 2025")}
              label="Topshirish muddati"
            />
          </div>
          <div className="filterPrimary">
            <FloorFilter label="Qavat" />
          </div>
        </div>
        <div className="bottomBox"></div>
      </div>

      <div className="cancel_window" onClick={onCloseModal} />
    </CartFilterNowContainer>
  );
};
export default CartFilterModal;
