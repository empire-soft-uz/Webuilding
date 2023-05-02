import React from 'react';
import Text from '../Text/text';
import styles from "./depositItem.module.css";
interface Props {
    textColor?: string;
    textSize?: string;
    iconUrl?: any,
    className?: string
}

const DepositItem: React.FC<Props> = ({
    textColor,
    textSize,
    iconUrl,
    className
}) => {
    return (
        <div className={`${styles.priceBox} ${className}`}>
            <div className={styles.price}>
                <Text textColor="black" textSize='twenty' textType='bold' cursor='none' text='4.4 - 11.5 mln $ dan' />
                <Text textColor="darkGrey" textSize='twelve' textType='semiBold' cursor='none' text='128 352 - 218 038 $/m2' />
            </div>
            {/* <div>
                <HeartWithCircle />
            </div> */}
        </div>
    )
}

export default DepositItem
