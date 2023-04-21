import React from 'react'
import { ASSETS } from '../../constants/requireAssets'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./productSizes.module.css"

const ProductSizes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img className={styles.img} src={ASSETS.body1} alt="" />
            </div>
            <div className={styles.topBox}>
                <div className={styles.sizeBox}>
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="4"
                    />
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text="Xonalar"
                    />
                </div>
                <div className={styles.sizeBox}>
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="79.35 m2"
                    />
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text="Umumiy"
                    />
                </div>
                <div className={styles.sizeBox}>
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="67.30 m2"
                    />
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text="Turar joy"
                    />
                </div>
                <div className={styles.sizeBox}>
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="7.96 m2"
                    />
                    <Text
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'grey'}
                        cursor={'Cursor'}
                        text="Oshxona"
                    />
                </div>
            </div>
            <div className={styles.centerBox}>
                <Text
                    textType={'middle'}
                    textSize={'twelve'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text="12.7 / 10.98 / 11.45 m2"
                />
                <Text
                    textType={'middle'}
                    textSize={'twelve'}
                    textColor={'grey'}
                    cursor={'Cursor'}
                    text="XONALAR MAYDONI"
                />
            </div>
            <div className={styles.bottomBox}>
                <Text
                    textType={'middle'}
                    textSize={'twelve'}
                    textColor={'grey'}
                    cursor={'Cursor'}
                    text="Korpus 4.2, 3-xona, 171 493 R / m2 dan"
                />
                <Text
                    textType={'middle'}
                    textSize={'twelve'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text="52,9 m2 dan 9 068 570 R gacha"
                />
            </div>
            <div className={styles.btnBox}>
                <Button
                    textSize={'sixteen'}
                    btnSize={'middle'}
                    btnColor={'purple'}
                    textColor={'textWhite'}
                    borderRadius={'ten'}
                    title="Takliflarni ko'rsatish"
                    style={{ height: "42px" }}
                />
            </div>
        </div>
    )
}

export default ProductSizes
