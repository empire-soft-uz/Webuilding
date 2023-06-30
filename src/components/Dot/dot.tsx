import React from "react";
import styles from "./dot.module.css";
interface Props {
  color?: string;
  size: "seven" | "ten" | "three";
  border: "none" | "fifty";
}

const Dot: React.FC<Props> = ({ color, size, border }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`${styles[size]} ${styles[border]}`}
    ></div>
  );
};

export default Dot;
