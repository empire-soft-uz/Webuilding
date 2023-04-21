import React from 'react'
import SymbolItem from '../SymbolItem/symbolItem'
import styles from "./simpleBtn.module.css"
interface Props {
    dotColor: string;
    text?: string;
    icon?: any;
    img?: any;
    dot?: any;
    textSize?: string;
    textColor?: string;
    textType?: string;
    minut?: string;
    btnType: 'outline' | 'primary';
}

const SimpleBtn: React.FC<Props> = ({
    dotColor,
    text,
    dot,
    icon,
    img,
    textSize,
    textColor,
    textType,
    minut,
    btnType
}) => {
    return (
        <div className={`${styles[btnType]}`}>
            <SymbolItem
                dotColor={dotColor}
                text={text}
                icon={icon}
                img={img}
                dotBorder='fifty'
                dot={dot}
                textSize={textSize}
                textColor={textColor}
                textType={textType}
            />
            <p className={styles.minut}>{minut}</p>
        </div>
    )
}

export default SimpleBtn
