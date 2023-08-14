import { observer } from "mobx-react-lite";
import styled from "styled-components";
import useRootStore from "../../Hooks/useRootStore";
import CountBtn from "../CountBtn/countBtn";
import SelectBox from "../SelectBox/selectBox";
import Text from "../Text/text";
import styles from "./buildingBody.module.css";

const BuildingBody = () => {
    const { setRoomCount } = useRootStore().oneProductStore;
    return (
        <Container className={styles.container}>
            <div>
                <Text
                    textType={"middle"}
                    textSize={"fourteen"}
                    textColor={"black"}
                    cursor={"Cursor"}
                    text="Korpus"
                    style={{ marginBottom: "10px" }}
                />
                <SelectBox />
            </div>
            <div className={styles.rightBox}>
                <Text
                    textType={"middle"}
                    textSize={"fourteen"}
                    textColor={"black"}
                    cursor={"Cursor"}
                    text="Xonalar soni"
                    style={{ marginBottom: "10px" }}
                />
                <div className={`${styles.filter} filterBox`}>
                    <CountBtn
                        onPress={() => setRoomCount("studio")}
                        countBtnType="outline"
                        title="Studiya"
                    />
                    <CountBtn
                        onPress={() => setRoomCount("1")}
                        countBtnType="outline"
                        title="1"
                    />
                    <CountBtn
                        onPress={() => setRoomCount("2")}
                        countBtnType="outline"
                        title="2"
                    />
                    <CountBtn
                        onPress={() => setRoomCount("3")}
                        countBtnType="outline"
                        title="3"
                    />
                    <CountBtn
                        onPress={() => setRoomCount("4")}
                        countBtnType="outline"
                        title="4"
                    />
                    <CountBtn
                        onPress={() => setRoomCount("5")}
                        countBtnType="outline"
                        title="5+"
                    />
                </div>
            </div>
        </Container>
    );
};

export default observer(BuildingBody);

const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 992px) {
    }

    @media (max-width: 768px) {
    }

    @media (max-width: 576px) {
        width: 100%;
        flex-direction: column;
        background-color: transparent;
        padding: 20px 0;
        margin-bottom: 10px;

        &::after {
            content: "";
            width: 100%;
            height: 1px;
            background-color: #e5e5e5;
            position: absolute;
            top: 0;
            left: 0;
        }

        &::before {
            content: "";
            width: 100%;
            height: 1px;
            background-color: #e5e5e5;
            position: absolute;
            bottom: 0;
            left: 0;
        }

        .filterBox {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 5px;

            button {
                p {
                    display: flex;
                    border-radius: 7px;
                    height: 35px;
                    font-size: 14px;
                    padding: 0 12px;
                    align-items: center;
                }
            }
        }
    }
`;
