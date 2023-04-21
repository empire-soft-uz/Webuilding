import React from 'react'
import styles from "./countBtn.module.css"
interface Props {
    title?: string;
    onPress?: () => void
    countBtnType: 'primary' | 'outline';
}

const CountBtn: React.FC<Props> = ({
    title,
    onPress,
    countBtnType
}) => {
    return (
        <div className={styles.container}>
            <p className={`${styles[countBtnType]}`}>{title}</p>
        </div>
    )
}

export default CountBtn
