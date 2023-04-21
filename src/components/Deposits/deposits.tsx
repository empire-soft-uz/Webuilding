import React from 'react'
import { AreaIcon, BateryIcon, CalendarIcon, FinishIcon, FloorNumberIcon, HeartWithCircle, HomeIcon, HomeTypeIcon, Organizator, PhoneIcon, RoundHeartIcon, ShiftIcon } from '../../assets/icons'
import styles from "./deposits.module.css"
import Item from '../Item/item'
import Text from '../Text/text'
import DepositItem from '../depositItem/depositItem'
import Button from '../Button/button'

const Deposits = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topBox}>
                <Text textColor="darkGrey" textSize='twelve' textType='middle' cursor='none' text='Depozitlar' />
            </div>
            <div className={styles.depositItemBox}>
                <DepositItem />
            </div>
            <div className={styles.depositItemBox}>
                <div className={styles.priceBox}>
                    <div className={styles.price}>
                        <Text textColor="darkGrey" textSize='fourteen' textType='middle' cursor='none' text='128 352 - 218 038 $/m2' />
                        <Text textColor="grey" textSize='fourteen' textType='middle' cursor='none' text='4.4 - 11.5 mln $ dan' />
                    </div>
                    <div>
                        <BateryIcon />
                    </div>
                </div>
            </div>
            <div className={styles.featureBox}>
                <div className={styles.features}>
                    <Item
                        title='Kvartira maydonlari'
                        text='21.6 - 79.4 m2'
                        icon={<AreaIcon />}
                        greyTitle
                    />
                    <Item
                        title='Kvartira maydonlari'
                        text='21.6 - 79.4 m2'
                        icon={<CalendarIcon />}
                        greyTitle
                    />
                    <Item
                        icon={<HomeIcon />}
                        title='Kvartira maydonlari'
                        text='21.6 - 79.4 m2'
                        greyTitle
                    />
                    <Item
                        icon={<FloorNumberIcon />}
                        title='Kvartira maydonlari'
                        text='21.6 - 79.4 m2'
                        greyTitle
                    />
                    <Item
                        icon={<ShiftIcon />}
                        title='Kvartira maydonlari'
                        greyTitle
                        text='21.6 - 79.4 m2'
                    />
                    <Item
                        icon={<HomeTypeIcon />}
                        title='Kvartira maydonlari'
                        text='21.6 - 79.4 m2'
                        greyTitle
                    />
                    <Item
                        icon={<FinishIcon />}
                        title='Kvartira maydonlari'
                        text='21.6 - 79.4 m2'
                        greyTitle
                    />
                </div>
                <div className={styles.more}>
                    <Text textColor="purple" textSize='twelve' textType='middle' cursor='none' text='Barcha xususiyatlar' />
                </div>
            </div>
            <div className={styles.boxBottom}>
                <div className={styles.bottom}>
                    <div className={styles.priceBox}>
                        <div className={styles.price}>
                            <Text textColor="darkGrey" textSize='twelve' textType='middle' cursor='none' text='128 352 - 218 038 $/m2' />
                            <Text textColor="grey" textSize='fourteen' textType='middle' cursor='none' text='4.4 - 11.5 mln $ dan' />
                        </div>
                        <div>
                            <Organizator />
                        </div>
                    </div>
                </div>
                <div className={styles.btnBox}>
                    <Button borderRadius='ten' textSize='fourteen' btnColor='purple' btnSize='middle' textColor='textWhite' title="Qo' ng'iroq qiling" iconUrl={<PhoneIcon />} />
                    <Button borderRadius='ten' textSize='fourteen' btnColor='lightPurple' btnSize='large' textColor='textPurple' title="Menga qo'ng'iroq qiling" />
                </div>
            </div>
        </div>
    )
}

export default Deposits
