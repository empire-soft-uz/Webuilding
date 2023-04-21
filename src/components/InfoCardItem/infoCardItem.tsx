import React from 'react'
import { LineIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import Slider from '../Slider/slider'
import styles from "./infoCardItem.module.css"
interface Props {
    label?: string;
    from?: string;
    to?: string;
}

const InfoCardItem: React.FC<Props> = ({
    label,
    from,
    to
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>{label}</p>
            </div>
            <div className={styles.center}>
                <p>{from}</p>
                <span className={styles.line}></span>
                <p>{to}</p>
            </div>
            <div className={styles.bottomLineBox}>
                <Slider />
            </div>
        </div>
    )
}

export default InfoCardItem
