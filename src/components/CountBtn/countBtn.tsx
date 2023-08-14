import React from "react";
import styles from "./countBtn.module.css";
interface Props {
    title?: string;
    onPress?: () => void;
    countBtnType: "primary" | "outline";
}

const CountBtn: React.FC<Props> = ({ title, onPress, countBtnType }) => {
    const [active, setActive] = React.useState(countBtnType || "primary");

    const onHandle = () => {
        onPress && onPress();
        setActive(active === "primary" ? "outline" : "primary");
    };

    return (
        <button className={styles.container} onClick={onHandle}>
            <p className={`${styles[active]} `}>{title}</p>
        </button>
    );
};

export default CountBtn;
