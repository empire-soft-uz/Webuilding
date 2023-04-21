import React from 'react'
import styles from "./arrowBtn.module.css"
interface Props {
    icon: any
}

const ArrowBtn: React.FC<Props> = ({
    icon
}) => {
    return (
        <div className={styles.container}>
            {icon}
        </div>
    )
}

export default ArrowBtn
