import React, { CSSProperties } from 'react'
import styles from "./button.module.css"
interface Props {
    title?: string;
    iconUrl?: any;
    textSize: 'sixteen' | 'fourteen',
    btnSize: 'large' | 'middle' | 'small' | 'avarage';
    btnColor: 'purple' | 'lightPurple' | 'outline';
    textColor: 'textWhite' | 'textPurple' | "green" | "red";
    borderRadius: 'ten' | 'none' | 'five' | 'thirty';
    onPress?: () => void;
    style?: CSSProperties;
    children?: React.ReactNode;
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
    children
}) => {
    return (
        <div style={{ ...style }} className={`${styles[btnSize]} ${styles[btnColor]} ${styles[borderRadius]}`} onClick={onPress}>
            {iconUrl ?
                <div className={styles.iconBox}>
                    {iconUrl}
                </div> : null
            }
            <button className={`${styles.btn} ${styles[textColor]} ${styles[textSize]}`}>{title || children}</button>
        </div>
    )
}

export default Button
