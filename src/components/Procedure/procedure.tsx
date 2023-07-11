import BuildingBody from "../BuildingBody/buildingBody";
import Button from "../Button/button";
import ProductSizesCarusel from "../ProductSizesCarusel/productSizesCarusel";
import Text from "../Text/text";
import styles from "./procedure.module.css";

const Procedure = () => {
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
          title="56"
        />
      </div>
      <div className={styles.body}>
        <BuildingBody />
        <ProductSizesCarusel />
      </div>
    </div>
  );
};

export default Procedure;
