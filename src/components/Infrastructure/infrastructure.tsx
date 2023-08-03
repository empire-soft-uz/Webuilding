import React from "react";
import { ProtectIcon, SchoolBuildingIcon } from "../../assets/icons";
import { LocateIcon } from "../../assets/icons";
import { COLORS } from "../../constants/color";
import { ASSETS } from "../../constants/requireAssets";
import SimpleBtn from "../SimpleBtn/simpleBtn";
import Text from "../Text/text";
import YandexMap from "../YandexMap/yandexMap";
import styles from "./infrastructure.module.css";
const data = [
  { id: 0, locatsiya1: 41.307731, locatsiya2: 69.251159 },
  { id: 1, locatsiya1: 41.318025, locatsiya2: 69.279018 },
  { id: 2, locatsiya1: 41.314354, locatsiya2: 69.26548 },
  { id: 3, locatsiya1: 41.309733, locatsiya2: 69.254216 },
  { id: 4, locatsiya1: 41.310152, locatsiya2: 69.245404 },
];
const Infrastructure = () => {
  const FilterData = () => {
    
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Text
          textType={"middle"}
          textSize={"twenty"}
          textColor={"black"}
          cursor={"Cursor"}
          text="Infrastruktura"
        />
      </div>
      <div className={styles.btnBox}>
        <SimpleBtn
          dotColor={COLORS.black}
          text="Maktab"
          btnType={"primary"}
          img={ASSETS.schoolBuilding}
        />
      </div>
      <div className={styles.security}>
        <Text
          textType={"middle"}
          textSize={"sixteen"}
          textColor={"black"}
          cursor={"Cursor"}
          text="Xavfsizlik"
        />
        <div className={styles.btn}>
          <SimpleBtn
            dotColor={""}
            text="Devor bilan o'ralgan perimetr"
            btnType={"primary"}
            img={ASSETS.protect}
          />
        </div>
      </div>
      <div className={styles.mapBox}>
        <YandexMap data={data} />
      </div>
    </div>
  );
};

export default Infrastructure;
