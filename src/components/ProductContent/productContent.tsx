import React from 'react'
import { CameraIcon, FinishIcon, FinishOneIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import { ASSETS } from '../../constants/requireAssets'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./productContent.module.css"

const ProductContent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.aboveBox}>
                <div className={styles.topBox}>
                    <div className={styles.info}>
                        <Text cursor='none' textColor='white' textSize='ten' textType='middle' text='Bosh sahifa' />
                        <Text cursor='none' textColor='white' textSize='ten' textType='middle' text='Tashkent' />
                        <Text cursor='none' textColor='white' textSize='ten' textType='middle' text='0N1234' />
                    </div>
                    <div className={styles.nameBox}>
                        <Text cursor='none' textColor='white' textSize='thirtyFive' textType='middle' text='JK Yangi Choshtepa' />
                        <Button btnSize='small' btnColor='purple' textSize='fourteen' title='Ekanom' borderRadius='five' textColor='textWhite' />
                    </div>
                    <div className={styles.locationBox}>
                        <Text cursor='none' textColor='white' textSize='ten' textType='middle' text='Toshkent shahar, Yangi Hayot tumani, O’zar ko’chasi  72-uy 47' />
                    </div>
                </div>
                {/* <div className={styles.btnBox}>
                    <Button iconUrl={<FinishOneIcon color={COLORS.purple} />} btnSize='avarage' btnColor='lightPurple' textSize='fourteen' title='Tugatish' borderRadius='five' textColor='textPurple' />
                    <Button iconUrl={<CameraIcon color={COLORS.purple} />} btnSize='avarage' btnColor='lightPurple' textSize='fourteen' title='Suratlar' borderRadius='five' textColor='textPurple' />
                </div> */}
            </div>
            <div className={styles.imgBox}>
                <img src={ASSETS.pr1} alt="" />
            </div>
        </div>
    )
}

export default ProductContent
