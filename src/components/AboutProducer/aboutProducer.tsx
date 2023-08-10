import { observer } from "mobx-react-lite";
import React from "react";
import { ASSETS } from "../../constants/requireAssets";
import useRootStore from "../../Hooks/useRootStore";
import Text from "../Text/text";
import styles from "./aboutProducer.module.css";

const AboutProducer = () => {
    const { oneProduct } = useRootStore().oneProductStore;
    return (
        <div className={styles.container}>
            <Text
                textType={"middle"}
                textSize={"sixteen"}
                textColor={"black"}
                cursor={"Cursor"}
                text="Ishlab chiquvchi haqida"
            />
            <div className={styles.rowBox}>
                <div className={styles.imgBox}>
                    <img className={styles.img} src={ASSETS.rating} alt="" />
                </div>
                <div className={styles.item}>
                    <Text
                        textType={"middle"}
                        textSize={"twelve"}
                        textColor={"grey"}
                        cursor={"Cursor"}
                        text={oneProduct.aboutProducer.process}
                    />
                    <Text
                        textType={"middle"}
                        textSize={"fourteen"}
                        textColor={"black"}
                        cursor={"Cursor"}
                        text={oneProduct.aboutProducer.finished}
                    />
                </div>
                <span className={styles.line}></span>
                <div className={styles.item}>
                    <Text
                        textType={"middle"}
                        textSize={"twelve"}
                        textColor={"grey"}
                        cursor={"Cursor"}
                        text="Qurilmoqda"
                    />
                    <Text
                        textType={"middle"}
                        textSize={"fourteen"}
                        textColor={"black"}
                        cursor={"Cursor"}
                        text={oneProduct.aboutProducer.construction}
                    />
                </div>
                <span className={styles.line}></span>
                <div className={styles.item}>
                    <Text
                        textType={"middle"}
                        textSize={"twelve"}
                        textColor={"grey"}
                        cursor={"Cursor"}
                        text="Kompaniyaning yoshi"
                    />
                    <Text
                        textType={"middle"}
                        textSize={"fourteen"}
                        textColor={"black"}
                        cursor={"Cursor"}
                        text={oneProduct.aboutProducer.companyAge}
                    />
                </div>
            </div>
            <Text
                textType={"thin"}
                textSize={"fourteen"}
                textColor={"grey"}
                style={{ lineHeight: "25px" }}
                cursor={"Cursor"}
                text={oneProduct.aboutProducer.companyText}
            />
        </div>
    );
};

export default observer(AboutProducer);
