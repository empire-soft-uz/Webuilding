import React, { useState } from "react";
import useRootStore from "../../Hooks/useRootStore";
import Button from "../Button/button";
import FinishTimeFilter from "../FinishTimeFilter/finishTimeFilter";
import FloorFilter from "../FloorFilter/floorFilter";
import PriceFilter from "../PriceFilter/priceFilter";
import RoomsSelect from "../RoomsSelect/roomsSelect";
import SizeFilter from "../SizeFilter/sizeFilter";
import styles from "./filterModal.module.css";
import { observer } from "mobx-react";
import Text from "../Text/text";
import { CloseIcon } from "../../assets/icons";
interface Props {
  onOpen?: boolean;
  onClose?: () => void;
}

const FilterModal = () => {
  const { visiable, hide } = useRootStore().visibleStore;

  return (
    <div
      className={styles.contianer}
      style={{ bottom: visiable.filterModal ? "0" : "-100vh" }}
    >
      <div className={styles.header}>
        <Text
          textType={"middle"}
          textSize={"twenty"}
          textColor={"black"}
          text="Фильтры"
        />
        <div className={styles.closeBox} onClick={() => hide("filterModal")}>
          <CloseIcon />
        </div>
      </div>
      <div className={styles.infoCard}>
        <RoomsSelect />
        <PriceFilter label="Narxi, ming $" />
        <SizeFilter label="Maydoni, m²" />
        <FinishTimeFilter
          from={new Date()}
          to={new Date("Thu Dec 27 2025")}
          label="Topshirish muddati"
        />
        <FloorFilter label="Qavat" />
      </div>
    </div>
  );
};

export default observer(FilterModal);
