import React from "react";
import DocumentCollapse from "../DocumentCollapse/documentCollapse";
import Text from "../Text/text";
import styles from "./documents.module.css";

const Documents = () => {
    return (
        <div className={styles.container}>
            <Text
                textType={"middle"}
                textSize={"sixteen"}
                textColor={"black"}
                cursor={"Cursor"}
                text="Hujjatlar"
                style={{
                    margin: "0 20px",
                }}
            />
            <div className={styles.documentCollapse}>
                <DocumentCollapse />
            </div>
        </div>
    );
};

export default Documents;
