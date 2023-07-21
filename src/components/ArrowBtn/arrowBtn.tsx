import React, { CSSProperties, useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import styles from "./arrowBtn.module.css"
import { COLORS } from '../../constants/color';
interface Props {
    icon?: any;
    hoverIcon?: any;
    onPress?: () => void;
    onNext?: () => void;
    disabled?: boolean;
    style?: CSSProperties;
}

const ArrowBtn: React.FC<Props> = ({
    icon,
    onPress,
    disabled,
    style,
    hoverIcon,
    onNext
}) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} style={{ ...style }} onClick={onPress}>
                <RiArrowLeftSLine size={26} color={COLORS.white} />
            </button>
            <button className={styles.button} style={{ ...style }} onClick={onNext}>
                <RiArrowRightSLine size={26} color={COLORS.white} />
            </button>
        </div>
    )
}

export default ArrowBtn
