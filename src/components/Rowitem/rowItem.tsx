import React from 'react'
import Text from '../Text/text'
import styles from "./rowitem.module.css";
interface Props {
    text?: string;
    iconUrl?: any;
    imgUrl?: any;
}

const RowItem: React.FC<Props> = ({
    text,
    iconUrl,
    imgUrl
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.iconBox}>
                {imgUrl ? <img className={styles.img} src={imgUrl} alt='person' /> : iconUrl}
            </div>
            <Text cursor='Cursor' text={text} textColor="purple" textSize='twelve' textType='middle' />
        </div>
    )
}

export default RowItem
