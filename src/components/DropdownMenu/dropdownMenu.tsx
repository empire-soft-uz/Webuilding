import React, { CSSProperties } from 'react'
import styles from "./dropdownMenu.module.css"
import { ArrowBlackIcon } from '../../assets/icons';
interface Props {
    option?: string;
    value?: string;
    textColor?: string;
    textSize?: string;
    style?: CSSProperties;
}

const DropdownMenu: React.FC<Props> = ({
    option,
    value,
    textColor,
    textSize,
    style
}) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <select style={{ ...style, fontSize: textSize, color: textColor }} className={styles.select}>
                <option value={value}>{option}</option>
                <option value={value}>{option}</option>
                <option value={value}>{option}</option>
            </select>
            <ArrowBlackIcon color='rgba(129, 130, 133, 0.8)' />
        </div>
    )
}

export default DropdownMenu
