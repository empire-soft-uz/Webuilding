import { MenuItem, Select } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/color";
import { ProductBodyData } from "../../constants/productData";
import useRootStore from "../../Hooks/useRootStore";
import Collapse from "../Collapse/collapse";
import Text from "../Text/text";
import styles from "./collapseContent.module.css";

const CollapseContent = () => {
    const { oneProduct, selectBody, setSelectedBody } =
        useRootStore().oneProductStore;
    return (
        <Container className={styles.container}>
            <Text
                className="title"
                textType={"middle"}
                textSize={"twenty"}
                textColor={"black"}
                cursor={"none"}
                text={"JK Modern Sergeli ishlab chiqaruvchidan 56 ta xonadon"}
                style={{ marginBottom: "20px" }}
            />
            {/* <DropdownMenu option='Barcha korpus' textColor={COLORS.purple} textSize='16px' /> */}
            <div className="selectBox">
                <select
                    onChange={(e) => setSelectedBody(e.target.value as never)}
                >
                    {ProductBodyData.map((e, index) => {
                        return (
                            <option
                                // onChange={() => setSelectedBody(e)}
                                key={index}
                                value={e.name}
                            >
                                {e.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <Text
                className="mainText"
                textType={"middle"}
                textSize={"fourteen"}
                textColor={"black"}
                cursor={"none"}
                text={oneProduct.finishTime}
                style={{ margin: "10px 0 20px 0" }}
            />
            <Collapse />
        </Container>
    );
};

export default observer(CollapseContent);

const Container = styled.div`
    width: 100%;
    height: auto;

    .selectBox {
        width: 80px;
        height: 30px;
        margin-bottom: 20px;
        select {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            color: ${COLORS.purple};
            option {
                width: 100%;
                height: 100%;
            }
        }
    }

    @media (max-width: 768px) {
        .title {
            font-size: 18px;
        }
    }

    @media (max-width: 576px) {
        .title {
            font-size: 16px;
            margin-bottom: 10px !important;
        }

        .selectBox {
            #demo-simple-select {
                width: 95px;
                font-size: 14px;
            }

            font-size: 14px;
            margin-bottom: 10px;
        }

        .mainText {
            font-size: 12px;
            margin-bottom: 10px !important;
        }
    }
`;
