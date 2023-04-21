import React, { CSSProperties } from 'react'
import styles from "./dropdownMenu.module.css"
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
        <select style={{ ...style, fontSize: textSize, color: textColor }} className={styles.select}>
            <option value={value}>{option}</option>
            <option value={value}>{option}</option>
            <option value={value}>{option}</option>
        </select>
    )
}

export default DropdownMenu
