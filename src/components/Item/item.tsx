import React from 'react'
import { AreaIcon, HeartWithCircle, RoundHeartIcon } from '../../assets/icons'
import styles from "./item.module.css"
import Text from '../Text/text'
interface Props {
    icon?: any
    title?: string | number;
    text?: string | number;
    greyTitle?: boolean;
    greyText?: boolean
}

const Item: React.FC<Props> = ({
    icon,
    text,
    title,
    greyText,
    greyTitle
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgBox}>
                {icon}
            </div>
            <div className={styles.textBox}>
                {greyTitle ?
                    <Text textSize='twelve' textColor='grey' textType='middle' cursor='none' text={title} /> :
                    <Text textSize='twelve' textColor='black' textType='middle' cursor='none' text={title} />
                }
                {greyText ?
                    <Text textSize='twelve' textColor='darkGrey' textType='middle' cursor='none' text={text} /> :
                    <Text textSize='twelve' textColor='black' textType='semiBold' cursor='none' text={text} />
                }
            </div>
        </div>
    )
}

export default Item
