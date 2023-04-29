import React from 'react';
import styles from "./banner.module.css";

interface Props {
    imgUrl?: any
}

const BannerForProduct: React.FC<Props> = ({
    imgUrl,
}) => {

    return (
        <div className={styles.container}>
            <img className={styles.image} src={imgUrl} alt="" />
        </div>
    )
}

export default BannerForProduct
