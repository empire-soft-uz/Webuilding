import { Face } from '@mui/icons-material'
import React from 'react'
import { GreenDownIcon } from '../../assets/icons'
import Chart from '../Chart/chart'
import Item from '../Item/item'
import Text from '../Text/text'
import styles from "./invest.module.css"

const Invest = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topBox}>
                <div className={styles.text}>
                    <Text
                        textType={'middle'}
                        textSize={'sixteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="Investitsion jozibadorlik"
                    />
                </div>
                <div className={styles.filter}>
                    <p>Barcha kvartiralar</p>
                    <span className={styles.line}></span>
                    <p>1 xonali</p>
                    <span className={styles.line}></span>
                    <p>2 xonali</p>
                    <span className={styles.line}></span>
                    <p>3 xonali</p>
                    <span className={styles.line}></span>
                    <p>4 xonali</p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.infoBox}>
                    <div className={styles.info}>
                        <Item
                            icon={<Face />}
                            title='Shoshilishni maslahat beramiz'
                            text="O'rtacha narx 2% ga tushdi"
                            greyText
                        />
                    </div>
                    <div className={styles.AllPrices}>
                        <div className={styles.item}>
                            <Text
                                textType={'middle'}
                                textSize={'twelve'}
                                textColor={'grey'}
                                cursor={'Cursor'}
                                text="Kvartira uchun o'rtacha narx"
                            />
                            <div className={styles.pricesBox}>
                                <p className={styles.price}>
                                    6.9 mln $
                                </p>
                                <p className={styles.fell}>
                                    <span className={styles.downIcon}>
                                        <GreenDownIcon />
                                    </span>
                                    134 940 $
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <Text
                                textType={'middle'}
                                textSize={'twelve'}
                                textColor={'grey'}
                                cursor={'Cursor'}
                                text="Kvadrat metr uchun o'rtacha narx. metr"
                            />
                            <div className={styles.pricesBox}>
                                <p className={styles.price}>
                                    6.9 mln $
                                </p>
                                <p className={styles.fell}>
                                    <span className={styles.downIcon}>
                                        <GreenDownIcon />
                                    </span>
                                    134 940 $
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <Text
                                textType={'middle'}
                                textSize={'twelve'}
                                textColor={'grey'}
                                cursor={'Cursor'}
                                text="Kvadrat metr uchun o'rtacha narx. metr"
                            />
                            <div className={styles.pricesBox}>
                                <p className={styles.price}>
                                    6.9 mln $
                                </p>
                                <p className={styles.count}>
                                    1884 tasi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.chartBox}>
                    <Chart />
                </div>
            </div>
        </div>
    )
}

export default Invest
