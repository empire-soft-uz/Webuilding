import { observer } from "mobx-react-lite";
import useRootStore from "../../Hooks/useRootStore";
import BuildingBody from "../BuildingBody/buildingBody";
import Button from "../Button/button";
import ProductSizesCarusel from "../ProductSizesCarusel/productSizesCarusel";
import Text from "../Text/text";
import styles from "./procedure.module.css";

const Procedure = () => {
    const { oneProduct, selectBody } = useRootStore().oneProductStore;
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text
                    className="title"
                    textType={"middle"}
                    textSize={"twenty"}
                    textColor={"black"}
                    cursor={"Cursor"}
                    text="Tartiblar"
                />
                <Button
                    className="btnTitle"
                    textSize={"fourteen"}
                    btnSize={"small"}
                    btnColor={"lightPurple"}
                    textColor={"textPurple"}
                    borderRadius={"ten"}
                    title={selectBody.length as unknown as string}
                />
            </div>
            <div className={styles.body}>
                <BuildingBody />
                <ProductSizesCarusel />
            </div>
        </div>
    );
};

export default observer(Procedure);
