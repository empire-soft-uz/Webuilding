import { observer } from "mobx-react-lite";
import React from "react";
import useRootStore from "../../Hooks/useRootStore";
import Text from "../Text/text";
import styles from "./mainAdventages.module.css";

const MainAdventages = () => {
    const { oneProduct } = useRootStore().oneProductStore;
    return (
        <div className={styles.container}>
            <Text
                textType={"middle"}
                textSize={"sixteen"}
                textColor={"black"}
                cursor={"Cursor"}
                text="Asosiy afzalliklari"
                style={{ marginBottom: "30px" }}
            />
            <Text
                textType={"middle"}
                textSize={"fourteen"}
                textColor={"black"}
                cursor={"Cursor"}
                style={{ marginBottom: "30px" }}
                text={oneProduct.locationToTransport}
            />
            {oneProduct.accessLocationToTr.map((item, index) => {
                return (
                    <Text
                        textType={"middle"}
                        textSize={"twelve"}
                        textColor={"darkGrey"}
                        cursor={"Cursor"}
                        style={{ marginBottom: "30px" }}
                        text={item.text}
                    />
                );
            })}
        </div>
    );
};

export default observer(MainAdventages);
