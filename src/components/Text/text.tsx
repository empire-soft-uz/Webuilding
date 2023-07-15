import React, { CSSProperties } from 'react'
import styles from "./text.module.css"
interface Props {
    text?: string | number;
    style?: CSSProperties;
    textType: 'bold' | 'middle' | 'thin' | 'semiBold' | 'light';
    textSize: 'fifty' | 'thirtyFive' | 'thirty' | 'twentyFour' | 'twenty' | 'eighteen' | 'sixteen' | 'fourteen' | 'twelve' | 'ten';
    textColor: 'black' | 'purple' | 'darkGrey' | 'grey' | 'white' | 'blue' | 'darkBlue' | 'lightGrey';
    cursor?: 'Cursor' | 'none'
    onPress?: () => void;
    children?: React.ReactNode;
    className?: string;
}

const Text: React.FC<Props> = ({
    text,
    style,
    textType,
    textSize,
    textColor,
    onPress,
    cursor,
    children,
    className,
}) => {
    return (
        <p
            onClick={onPress} style={{ ...style }}
            className={`${styles[textType]} ${styles[textSize]} ${styles[textColor]} ${styles[cursor || 'none']} ${className || ''}`}
        >
            {text}
            {children}
        </p>
    )
}

export default Text
