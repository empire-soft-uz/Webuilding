import React from 'react'
import SymbolItem from '../SymbolItem/symbolItem';
import Text from '../Text/text';
import styles from "./productItem.module.css"
interface Props {
    image?: string;
    time?: string;
    company?: string;
    name?: string;
    near?: string;
    nearTime?: string;
    price?: string;
    homeCount?: string;
    symbolDotColor: string;
    symbolDotIcon?: any;
    onPress?: () => void;
}

const ProductItem: React.FC<Props> = ({
    company,
    homeCount,
    image,
    name,
    near,
    nearTime,
    price,
    time,
    symbolDotColor,
    symbolDotIcon,
    onPress
}) => {
    return (
        <div className={styles.container} onClick={onPress}>
            <div className={styles.imageBox}>
                <img className={styles.image} src={image} alt="" />
            </div>
            <div className={styles.nameBox}>
                <div className={styles.time}>
                    <Text textType={'middle'} textSize={'twelve'} textColor={'black'} cursor={'none'} text={time} />
                    <Text textType={'middle'} textSize={'twelve'} textColor={'purple'} cursor={'none'} text={company} />
                </div>
                <Text textType={'middle'} textSize={'twenty'} textColor={'black'} cursor={'none'} text={name} />
            </div>
            <div className={styles.priceBox}>
                <div className={styles.near}>
                    <SymbolItem dotColor={symbolDotColor} dot text={near} />
                    <SymbolItem dotColor={symbolDotColor} icon={symbolDotIcon} text={nearTime} />
                </div>
                <div className={styles.price}>
                    <Text textType={'middle'} textSize={'sixteen'} textColor={'black'} cursor={'none'} text={price} />
                    <Text textType={'middle'} textSize={'twelve'} textColor={'darkGrey'} cursor={'none'} text={homeCount} />
                </div>
            </div>
        </div>
    )
}

export default ProductItem
