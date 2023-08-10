import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";
import { ProtectIcon, SchoolBuildingIcon } from "../../assets/icons";
import { LocateIcon } from "../../assets/icons";
import { COLORS } from "../../constants/color";
import { ASSETS } from "../../constants/requireAssets";
import useRootStore from "../../Hooks/useRootStore";
import SimpleBtn from "../SimpleBtn/simpleBtn";
import Text from "../Text/text";
import YandexMap from "../YandexMap/yandexMap";
import styles from "./infrastructure.module.css";
const data = [
    { id: 0, locatsiya1: 41.307731, locatsiya2: 69.251159, type: "school" },
    { id: 1, locatsiya1: 41.318025, locatsiya2: 69.279018, type: "school" },
    {
        id: 2,
        locatsiya1: 41.314354,
        locatsiya2: 69.26548,
        type: "kgarten",
    },
    {
        id: 3,
        locatsiya1: 41.309733,
        locatsiya2: 69.254216,
        type: "kgarten",
    },
    {
        id: 4,
        locatsiya1: 41.310152,
        locatsiya2: 69.245404,
        type: "kgarten",
    },
];
const Infrastructure = () => {
    const { oneProduct, infrastructureFilter, nearbuildings } =
        useRootStore().oneProductStore;
    console.log("yandexdata", toJS(nearbuildings));

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
                {oneProduct.infrastructure.map((item, index) => {
                    return (
                        <SimpleBtn
                            key={index}
                            dotColor={COLORS.black}
                            text={item.placeName}
                            btnType={"primary"}
                            img={item.icon}
                            onPress={() => infrastructureFilter(item.type)}
                        />
                    );
                })}
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
                        text={oneProduct.infrastructure[0].security}
                        btnType={"primary"}
                        img={ASSETS.protect}
                    />
                </div>
            </div>
            <div className={styles.mapBox}>
                <YandexMap />
            </div>
        </div>
    );
};

export default observer(Infrastructure);
