import React from 'react'
import { ASSETS } from '../../constants/requireAssets'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./productSizes.module.css"
interface Props {
    image: string,
    rooms: string | number,
    common: string | number,
    accommodation: string | number,
    kitchen: string | number,
    roomsArea: string | number,
    bodySizeFrom: string | number,
    bodySizeTo: string | number
}

const ProductSizes: React.FC<Props> = ({
    accommodation,
    bodySizeFrom,
    bodySizeTo,
    common,
    image,
    kitchen,
    rooms,
    roomsArea
}) => {
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
                        text={rooms}
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
                        text={common}
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
                        text={accommodation}
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
                        text={kitchen}
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
                    text={roomsArea}
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
                    text={bodySizeFrom}
                />
                <Text
                    textType={'middle'}
                    textSize={'twelve'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text={bodySizeTo}
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
