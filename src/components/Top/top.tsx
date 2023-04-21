import React from 'react'
import { LineIcon, MapIcon } from '../../assets/icons'
import RowItem from '../Rowitem/rowItem'
import Text from '../Text/text'
import styles from "./top.module.css"

const Top = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <RowItem iconUrl={<MapIcon />} text='Uzbekistan Tashkent' />
            </div>
            <div className={styles.rightBox}>
                <Text cursor='none' textColor='grey' textSize='twelve' textType='middle' text='Karera' />
                <Text cursor='none' textColor='grey' textSize='twelve' textType='middle' text='Projectlar' />
                <Text cursor='none' textColor='grey' textSize='twelve' textType='middle' text='Savdo markazi' />
                <LineIcon />
                <Text cursor='none' textColor='black' textSize='twelve' textType='middle' text='+998 (99) 310-37-63' />
                <Text cursor='none' textColor='grey' textSize='twelve' textType='middle' text='Qo’ng’iroq qilish' />
            </div>
        </div>
    )
}

export default Top
