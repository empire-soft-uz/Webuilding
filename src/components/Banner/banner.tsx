import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon, PersonIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import ArrowBtn from '../ArrowBtn/arrowBtn'
import Button from '../Button/button'
import SymbolItem from '../SymbolItem/symbolItem'
import Text from '../Text/text'
import styles from "./banner.module.css"
interface Props {
    imgUrl?: any
}

const Banner: React.FC<Props> = ({
    imgUrl
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.aboveBox}>
                <div className={styles.blurBox}>
                    <div>
                        <Button textSize={'sixteen'} btnSize={'avarage'} btnColor={'lightPurple'} textColor={'textPurple'} borderRadius={'thirty'} title={'GC "Monarx"'} />
                        <Text style={{ marginTop: "10px" }} textType={'middle'} textSize={'thirty'} textColor={'white'} cursor={'Cursor'} text='«Bizning uylar» MCHJ' />
                        <div className={styles.simpleInfo}>
                            <SymbolItem dot={true} dotColor={COLORS.orange} text='1-bekat' textColor={COLORS.white} />
                            <SymbolItem icon={<PersonIcon />} dotColor={COLORS.orange} text='8 min.' textType='Montserrat3' textColor={COLORS.white} textSize='12px' />
                        </div>
                        <div className={styles.advertising}>
                            <Text textType={'thin'} textSize={'fourteen'} textColor={'white'} cursor={'Cursor'} text='Uylar sotiladi!' />
                            <div className={styles.roomCount}>
                                <Text textType={'middle'} textSize={'sixteen'} textColor={'white'} cursor={'Cursor'} text='35 000 $ dan boshlab' />
                                <Text textType={'thin'} textSize={'fourteen'} textColor={'white'} cursor={'Cursor'} text='5 ta kvartira' />
                            </div>
                            <Button textSize={'fourteen'} btnSize={'middle'} btnColor={'purple'} textColor={'textWhite'} borderRadius={'five'} title='Kvartirani tanlang' />
                        </div>
                    </div>
                    <div className={styles.prevBox}>
                        <ArrowBtn icon={<ArrowLeftIcon />} />
                        <ArrowBtn icon={<ArrowRightIcon />} />
                    </div>
                </div>
            </div>
            <img className={styles.image} src={imgUrl} alt="" />
        </div>
    )
}

export default Banner
