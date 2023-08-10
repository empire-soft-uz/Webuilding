import React from "react";
import styles from "./selectBox.module.css";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import useRootStore from "../../Hooks/useRootStore";
import { ProductBodyData } from "../../constants/productData";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
const SelectData = {};

const SelectBox = () => {
    const { oneProduct, selectBody, setSelectedBody } =
        useRootStore().oneProductStore;
    console.log("setSelectBody", toJS(selectBody));

    return (
        <Container className={styles.container}>
            <select onChange={(e) => setSelectedBody(e.target.value as never)}>
                {ProductBodyData.map((e, index) => {
                    return (
                        <option key={index} value={e.key}>
                            {e.name}
                        </option>
                    );
                })}
            </select>
        </Container>
    );
};

export default observer(SelectBox);

const Container = styled.div`
    select {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        option {
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 576px) {
        flex: 1;
        width: 100%;
        height: 35px;
        border-radius: 7px;
        select {
            min-width: 100%;
            option {
                width: 100%;
            }
        }
        .MuiSelect-select {
            font-size: 14px;
            padding: 10px 7px;
        }
    }
`;
