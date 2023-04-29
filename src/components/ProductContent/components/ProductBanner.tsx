
import React from 'react'
import styles from "./productBanner.module.css"
import Text from '../../Text/text'
import Dot from '../../Dot/dot'
import Button from '../../Button/button'
import { ASSETS } from '../../../constants/requireAssets'

// Bosh sahifa > Toshkent > 0N1234
const breadcrumbs = [
    {
        title: 'Bosh sahifa',
        url: '/main'
    },
    {
        title: 'Toshkent',
        url: '/main/tashkent'
    },
    {
        title: '0N1234',
        url: '/main/tashkent/0N1234'
    }
]

function ProductBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.aboveBox}>
                <div className={styles.topBox}>
                    <div className={styles.breadcrumbs}>
                        {
                            breadcrumbs.map((item, index) => {
                                return (
                                    <div key={index} className={styles.breadcrumb}>
                                        <Text cursor='none' textColor='white' textSize='ten' textType='middle' text={item.title} />
                                        {
                                            index !== breadcrumbs.length - 1 &&
                                            <Dot color='white' size={'three'} border={'fifty'} />
                                        }
                                    </div>
                                )
                            })
                        }
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
            <div className={styles.bottomBox}>
            </div>
        </div>
    )
}

export default ProductBanner