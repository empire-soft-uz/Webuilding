import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { FinishPurpeIcon } from "../../assets/icons";
import { ASSETS } from "../../constants/requireAssets";
import Text from "../Text/text";
import styles from "./collapseItem.module.css";

type PropsData = {
    data?: {
        id: number;
        img: string;
        text: string;
        price: string;
        area: string;
        finish: string;
    };
    end?: boolean;
};

const CollapseItem = ({ end, data }: PropsData) => {
    return (
        <Container>
            <div className={`mediaMin768 ${end ? styles.notBorderBottom : ""}`}>
                <div className={styles.leftBox}>
                    <img className={styles.img} src={data?.img} alt="" />
                    <Text
                        textType={"middle"}
                        textSize={"sixteen"}
                        textColor={"black"}
                        cursor={"Cursor"}
                        text={data?.text}
                    />
                </div>
                <div className={styles.rightBox}>
                    <Text
                        textType={"middle"}
                        textSize={"sixteen"}
                        textColor={"darkBlue"}
                        cursor={"Cursor"}
                        text={data?.price}
                    />
                    <Text
                        textType={"middle"}
                        textSize={"sixteen"}
                        textColor={"darkBlue"}
                        cursor={"Cursor"}
                        text={data?.area}
                    />
                    <div className={styles.finishBox}>
                        <FinishPurpeIcon />
                        <Text
                            textType={"middle"}
                            textSize={"sixteen"}
                            textColor={"darkBlue"}
                            cursor={"Cursor"}
                            text={data?.finish}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default observer(CollapseItem);

const Container = styled.div`
    .mediaMin768 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1.5px solid #eff3f9;
        padding: 15px 0;
    }

    .notBorderBottom {
        border-bottom: none !important;
        padding-bottom: 0;
    }

    .mediaMax768 {
        display: none;
    }

    @media (max-width: 768px) {
        .mediaMin768 {
            display: none;
        }

        .mediaMax768 {
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;

            .main {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 6px;

                .topBox {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    align-items: center;

                    .price {
                        font-size: 14px;
                    }

                    .area {
                        font-size: 12px;
                    }
                }

                .text {
                    font-size: 14px;
                }

                .finishBox {
                    display: flex;
                    flex-direction: row;
                    gap: 6px;
                    align-items: center;

                    svg {
                        width: 15px;
                        height: 15px;
                    }

                    .finish {
                        font-size: 14px;
                    }
                }
            }
        }
    }
`;
