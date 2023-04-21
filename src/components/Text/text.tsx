import React, { CSSProperties } from 'react'
import styles from "./text.module.css"
interface Props {
    text?: string;
    style?: CSSProperties;
    textType: 'bold' | 'middle' | 'thin';
    textSize: 'fifty' | 'thirtyFive' | 'thirty' | 'twentyFour' | 'twenty' | 'sixteen' | 'fourteen' | 'twelve' | 'ten';
    textColor: 'black' | 'purple' | 'darkGrey' | 'grey' | 'white' | 'blue' | 'darkBlue';
    cursor: 'Cursor' | 'none'
    onPress?: () => void;
}

const Text: React.FC<Props> = ({
    text,
    style,
    textType,
    textSize,
    textColor,
    onPress,
    cursor
}) => {
    return (
        <p
            onClick={onPress} style={{ ...style }}
            className={`${styles[textType]} ${styles[textSize]} ${styles[textColor]} ${styles[cursor]}`}
        >
            {text}
        </p>
    )
}

export default Text
