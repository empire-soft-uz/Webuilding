import React from "react";
import styles from "./BottomLine.module.css";
interface Props {
  color?: string;
  border?: "none" | "fifty";
}

const BottomLine: React.FC<Props> = ({ color }) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.container}></div>
  );
};

export default BottomLine;
