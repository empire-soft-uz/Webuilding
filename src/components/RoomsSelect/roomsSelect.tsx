import React, { useState } from "react";
import { COLORS } from "../../constants/color";
import { FilterData } from "./filterData";
import styles from "./roomsSelect.module.css";
import useRootState from "../../Hooks/useRootState";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

const RoomsSelect = () => {
  const [state, setState] = useState();
  const floor = useRootState().filterState;
  const Checked = (value: any) => {
    setState(value);
    floor.setState(value, "rooms");
  };
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{t("filters.roomsSelect.rooms")}</p>
      </div>
      <div className={styles.center}>
        <input
          type={"button"}
          className={styles.item}
          onClick={(e: any) => Checked(e.target.value)}
          value={t("filters.roomsSelect.studio")}
          style={{
            backgroundColor:
              state === t("filters.roomsSelect.studio")
                ? COLORS.purple
                : "transparent",
            color:
              state === t("filters.roomsSelect.studio")
                ? COLORS.white
                : COLORS.black,
          }}
        />
        <div className={styles.itemBox}>
          {FilterData.map((e, index) => {
            return (
              <input
                style={{
                  backgroundColor:
                    state === e.id ? COLORS.purple : "transparent",
                  color: state === e.id ? COLORS.white : COLORS.black,
                }}
                key={index}
                type={"button"}
                onClick={() => Checked(e.id)}
                className={styles.item}
                value={e.type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(RoomsSelect);
