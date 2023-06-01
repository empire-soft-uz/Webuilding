import React from 'react'
import styles from "./avatar.module.css"
interface Props {
    imageUrl?: string;
    className?: string;
}

const Avatar: React.FC<Props> = ({
    imageUrl,
    className
}) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <img className={styles.img} src={imageUrl} alt="" />
        </div>
    )
}

export default Avatar
