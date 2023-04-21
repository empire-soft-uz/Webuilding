import React from 'react'
import Dot from '../Dot/dot';
import Text from '../Text/text';
import styles from "./symbolItem.module.css"
interface Props {
    text?: string;
    textColor?: string;
    textSize?: string;
    textType?: string;
    icon?: any;
    img?: string;
    dot?: any;
    dotColor: string;
    dotBorder?: any;
}

const SymbolItem: React.FC<Props> = ({
    text,
    dot,
    icon,
    img,
    dotColor,
    textColor,
    textSize,
    textType,
    dotBorder
}) => {
    return (
        <div className={styles.container}>
            {
                dot ?
                    <Dot color={dotColor} size={'ten'} border={dotBorder} />
                    :
                    icon ? icon : <img className={styles.img} src={img} />
            }
            <p style={{ color: textColor, fontSize: textSize, fontFamily: textType, }} className={styles.text}>{text}</p>
        </div>
    )
}

export default SymbolItem;
