import React from 'react'
import { LineIcon, LocationIcon, LocationTwoIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import Comment from '../Comment/comment'
import RowItem from '../Rowitem/rowItem'
import SimpleBtn from '../SimpleBtn/simpleBtn'
import Text from '../Text/text'
import styles from "./commentBox.module.css"

const CommentBox = () => {
    return (
        <div className={styles.container}>
            <Text
                textType={'middle'}
                textSize={'twentyFour'}
                textColor={'black'}
                cursor={'none'}
                text='JK “Yangi choshtepa” ishlab chiqaruvchidan 56 ta xonadon'
            />
            <div className={styles.locationBox}>
                <Text
                    textType={'middle'}
                    textSize={'fourteen'}
                    textColor={'grey'}
                    cursor={'none'}
                    text='3 kvadratgacha qurilish. 2023 yil'
                />
                <LineIcon />
                <Text
                    textType={'middle'}
                    textSize={'fourteen'}
                    textColor={'grey'}
                    cursor={'none'}
                    text='Toshkent sh, Yangi hayot t, O’zar ko’chasi 72 uy 47'
                />
                <RowItem iconUrl={<LocationTwoIcon />} text='Xaritadan ko’rish' />
            </div>
            <div className={styles.btnBox}>
                <SimpleBtn
                    dotColor={COLORS.purple}
                    dot
                    btnType={'outline'}
                    minut='5 min'
                    text='Qizil Baltiya'
                    textColor={COLORS.black}
                />
            </div>
            <div className={styles.comment}>
                <Text
                    textType={'middle'}
                    textSize={'sixteen'}
                    textColor={'black'}
                    cursor={'none'}
                    text='Eng foydali sharh'
                />
                <Comment comment="drok gomeostazni yoritadi, Xobbs bu muammoni birinchilardan bo'lib yoritib berdi psixologiya nuqtai nazaridan ..." />
            </div>
            <div className={styles.transport}>
                <Text textType={'middle'} textSize={'fourteen'} textColor={'black'} cursor={'none'} text='Joylashuv, transportga kirish imkoniyati' />
                <div className={styles.info}>
                    <Text textType={'middle'} textSize={'fourteen'} textColor={'grey'} cursor={'none'} text="'Sohil parki' turar joy majmuasi paxra daryosi sohilida, Pavlovskoye qishlog'i va yam qishlog'i yonida, 9-uyda qurilgan. ' Sohil parki' turar joy majmuasi" />
                </div>
                <Text textType={'middle'} textSize={'fourteen'} textColor={'purple'} cursor={'none'} text="Ko' proq o'qing" />
            </div>
        </div>
    )
}

export default CommentBox
