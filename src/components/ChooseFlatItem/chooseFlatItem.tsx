import React from 'react'
import { ASSETS } from '../../constants/requireAssets'
import Text from '../Text/text'
import styles from "./chooseFlatItem.module.css"

const ChooseFlatItem = () => {
    return (
        <div className={styles.container}>
            <Text
                textType={'thin'}
                textSize={'twelve'}
                textColor={'darkGrey'}
                text="4-й кв. 2024 год(а)"
            />
            <Text
                textType={'middle'}
                textSize={'twelve'}
                textColor={'black'}
                text="ЖК Aist Residence"
            />
            <div className={styles.imageBox}>
                <img src={ASSETS.body1} alt="" />
            </div>
            <Text
                textType={'middle'}
                textSize={'twenty'}
                textColor={'black'}
                text="1-к.кв 36.8 м²"
            />
            <div className={styles.sizeBox}>
                <Text
                    textType={'middle'}
                    textSize={'fourteen'}
                    textColor={'black'}
                    text="10 745 600 ₽"
                />
                <Text
                    textType={'thin'}
                    textSize={'twelve'}
                    textColor={'darkGrey'}
                    text="292 636 ₽ за м²"
                />
            </div>
            <div className={styles.other}>
                Без отделки
            </div>
            <div className={styles.info}>
                <Text
                    textType={'thin'}
                    textSize={'twelve'}
                    textColor={'darkGrey'}
                    text="Корпус 1"
                />
                <Text
                    textType={'thin'}
                    textSize={'twelve'}
                    textColor={'darkGrey'}
                    text="Этаж 16 из 30"
                />
            </div>
        </div>
    )
}

export default ChooseFlatItem
