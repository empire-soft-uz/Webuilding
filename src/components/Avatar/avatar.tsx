import React from 'react'
import styles from "./avatar.module.css"
interface Props {
    imageUrl?: string;
}

const Avatar: React.FC<Props> = ({
    imageUrl
}) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={imageUrl} alt="" />
        </div>
    )
}

export default Avatar
