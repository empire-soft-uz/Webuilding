import React, { CSSProperties, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/icons';
import styles from "./arrowBtn.module.css"
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
                <ArrowLeftIcon />
            </button>
            <button className={styles.button} style={{ ...style }} onClick={onNext}>
                <ArrowRightIcon />
            </button>
        </div>
    )
}

export default ArrowBtn
