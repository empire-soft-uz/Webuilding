import React, { CSSProperties } from "react";
import styles from "./button.module.css";
interface Props {
  title?: string;
  iconUrl?: any;
  textSize: "sixteen" | "fourteen";
  btnSize: "large" | "middle" | "small" | "avarage" | "auto" | "filter";
  btnColor: "purple" | "lightPurple" | "outline";
  textColor: "textWhite" | "textPurple" | "green" | "red";
  borderRadius: "ten" | "none" | "five" | "thirty";
  onPress?: () => void;
  style?: CSSProperties;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({
  title,
  iconUrl,
  btnSize,
  btnColor,
  textColor,
  onPress,
  textSize,
  borderRadius,
  style,
  children,
  className,
}) => {
  return (
    <button
      style={{ ...style }}
      className={`${styles.button} ${styles[btnSize]} ${styles[btnColor]} ${styles[borderRadius]} ${className}`}
      onClick={onPress}
    >
      {iconUrl ? <div className={styles.iconBox}>{iconUrl}</div> : null}
      <p className={`${styles.btn} ${styles[textColor]} ${styles[textSize]}`}>
        {title || children}
      </p>
    </button>
  );
};

export default Button;
