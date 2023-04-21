import React from 'react'
import { ASSETS } from '../../constants/requireAssets'
import Text from '../Text/text'
import styles from "./aboutProducer.module.css"


const AboutProducer = () => {
    return (
        <div className={styles.container}>
            <Text
                textType={'middle'}
                textSize={'sixteen'}
                textColor={'black'}
                cursor={'Cursor'}
                text="Ishlab chiquvchi haqida"
            />
            <div className={styles.rowBox}>
                <div className={styles.imgBox}>
                    <img className={styles.img} src={ASSETS.rating} alt="" />
                </div>
                <div className={styles.item}>
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text="Tugallandi"
                    />
                    <Text
                        textType={'middle'}
                        textSize={'fourteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="24 LCD - dagi 211 ta uy"
                    />
                </div>
                <span className={styles.line}></span>
                <div className={styles.item}>
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text="Qurilmoqda"
                    />
                    <Text
                        textType={'middle'}
                        textSize={'fourteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="20 LCD - da 140 ta uy"
                    />
                </div>
                <span className={styles.line}></span>
                <div className={styles.item}>
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text="Kompaniyaning yoshi"
                    />
                    <Text
                        textType={'middle'}
                        textSize={'fourteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="Bozorda 13 yil"
                    />
                </div>
            </div>
            <Text
                textType={'thin'}
                textSize={'fourteen'}
                textColor={'grey'}
                style={{ lineHeight: "25px" }}
                cursor={'Cursor'}
                text="Bozorning har bir sohasi, bugungi qarashlar doirasida, maqsadli trafikni ko'p qirrali ravishda tezlashtiradi. Biznes-reja
                        muvozanatli. Taniqli marketing klassiklaridan biri F. Kotler buni quyidagicha ta'riflaydi: qayta aloqa kuchaytiradi
                        oldingi kampaniyalar tajribasidan foydalangan holda reklama tartibi. Mediaves, yuqorida aytib o'tilganlardan 
                        ko'rinib turibdiki, quyidagilarni jamlaydi"
            />
        </div>
    )
}

export default AboutProducer
