import React from "react";
import useRootStore from "../../Hooks/useRootStore";
import ProductSizes from "../ProductSizes/productSizes";
import styles from "./productSizesCarusel.module.css";
import { observer } from "mobx-react";
import { toJS } from "mobx";

const ProductSizesCarusel = () => {
    const { oneProduct, selectBody } = useRootStore().oneProductStore;

    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                {selectBody.length > 0 ? (
                    selectBody.map((e, index) => {
                        return (
                            <div key={index} className={styles.item}>
                                <ProductSizes
                                    image={e.image}
                                    rooms={e.rooms}
                                    common={e.common}
                                    accommodation={e.accommodation}
                                    kitchen={e.kitchen}
                                    building={e.building}
                                    floor={e.floor}
                                />
                                <span className={styles.line}></span>
                            </div>
                        );
                    })
                ) : (
                    <div
                        style={{
                            height: "500px",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        No such information was found
                    </div>
                )}
            </div>
        </div>
    );
};

export default observer(ProductSizesCarusel);
