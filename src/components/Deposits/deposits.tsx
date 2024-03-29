import styled from "styled-components";
import {
    AreaIcon,
    BateryIcon,
    BuildingIcon,
    CalendarIcon,
    FinishIcon,
    FloorNumberIcon,
    HomeIcon,
    HomeTypeIcon,
    Organizator,
    PhoneIcon,
    ShiftIcon,
} from "../../assets/icons";
import Button from "../Button/button";
import Item from "../Item/item";
import Text from "../Text/text";
import DepositItem from "../depositItem/depositItem";
import styles from "./deposits.module.css";
import { useAppModals } from "../Modals";
import useRootState from "../../Hooks/useRootState";
import { observer } from "mobx-react-lite";
import useRootStore from "../../Hooks/useRootStore";

const Deposits = () => {
    const appModals = useAppModals();
    const { oneProduct } = useRootStore().oneProductStore;
    return (
        /* <div className={styles.topBox}>
                <Text
                    textColor="darkGrey"
                    textSize="twelve"
                    textType="bold"
                    cursor="none"
                    text="Depozitlar"
                />
            </div> 
            <div className={styles.depositItemBox}>
                <DepositItem className="depositItem" />
            </div> 
             <div className={styles.depositItemBox}>
                <div className={styles.priceBox}>
                    <div className={styles.price}>
                        <Text
                            textColor="darkGrey"
                            textSize="fourteen"
                            textType="semiBold"
                            cursor="none"
                            text="Sotish uchun mavjud"
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 5,
                            }}
                        >
                            <Text
                                textColor="grey"
                                textSize="fourteen"
                                textType="middle"
                                cursor="none"
                                text="64 dan"
                            />
                            <Text
                                textColor="grey"
                                textSize="fourteen"
                                textType="bold"
                                cursor="none"
                                text="56"
                            />
                            <Text
                                textColor="grey"
                                textSize="fourteen"
                                textType="middle"
                                cursor="none"
                                text="tasi"
                            />
                        </div>
                    </div>
                     <div>
                        <BateryIcon />
                    </div> 
                </div>
            </div> 
            <div className={`${styles.featureBox}`}>
                <div className={`${styles.features} featureItemsBox`}>
                    <Item
                        title="Kvartira maydonlari"
                        text="21.6 - 79.4 m2"
                        icon={<AreaIcon />}
                        greyTitle
                    />
                    <Item
                        title="Topshirish muddati"
                        text="2023 - 2025"
                        icon={<CalendarIcon />}
                        greyTitle
                    />
                    <Item
                        icon={<BuildingIcon />}
                        title="Binolar"
                        text="16 ta bino"
                        greyTitle
                    />
                    <Item
                        icon={<ShiftIcon />}
                        title="Shiftlar"
                        text="2.6 m - 2.7 m"
                        greyTitle
                    />
                    <Item
                        icon={<HomeTypeIcon />}
                        title="Uy turi"
                        text="Panel, monolit g'isht, g'isht, monolit"
                        greyTitle
                    />
                    <Item
                        icon={<HomeIcon />}
                        title="Sinf"
                        text="Iqtisodiyot"
                        greyTitle
                    />
                    <Item
                        icon={<FloorNumberIcon />}
                        title="Qavatlar soni"
                        text="10 dan 18 gacha"
                        greyTitle
                    />
                    <Item
                        icon={<FinishIcon />}
                        title="Tugatish variantlari"
                        text="Mebel bilan tugatish"
                        greyTitle
                    />
                </div>
                <div className={styles.more}>
                    <Text
                        textColor="purple"
                        textSize="twelve"
                        textType="middle"
                        cursor="none"
                        text="Barcha xususiyatlar"
                    />
                </div>
            </div> */
        <div className={styles.container}>
            <div className={styles.boxBottom}>
                <div className={styles.organizatorBox}>
                    <div className={styles.organizatorName}>
                        <Text
                            textColor="darkGrey"
                            textSize="twenty"
                            textType="middle"
                            cursor="none"
                            text="Ishlab chiquvchi"
                        />
                        <Text
                            textColor="darkBlue"
                            textSize="twentyFour"
                            textType="bold"
                            cursor="none"
                            text={oneProduct.producerTeam}
                        />
                    </div>
                    <div className={styles.organizator}>
                        <Organizator />
                    </div>
                </div>
                <div className={styles.btnBox}>
                    <Button
                        borderRadius="ten"
                        textSize="fourteen"
                        btnColor="purple"
                        btnSize="middle"
                        textColor="textWhite"
                        title="Qo' ng'iroq qiling"
                        onPress={() => {
                            appModals?.show("i_call_you_now");
                        }}
                        iconUrl={<PhoneIcon />}
                    />
                    <Button
                        borderRadius="ten"
                        textSize="fourteen"
                        btnColor="lightPurple"
                        btnSize="large"
                        onPress={() => {
                            appModals?.show("call_me_later");
                        }}
                        textColor="textPurple"
                        title="Menga qo'ng'iroq qiling"
                    />
                </div>
            </div>
        </div>
    );
};

export default observer(Deposits);
