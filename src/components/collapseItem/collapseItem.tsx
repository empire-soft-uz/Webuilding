import React from 'react'
import { FinishPurpeIcon } from '../../assets/icons'
import { ASSETS } from '../../constants/requireAssets'
import Text from '../Text/text'
import styles from "./collapseItem.module.css"

const CollapseItem = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBox}>
                <img className={styles.img} src={ASSETS.room} alt="" />
                <Text
                    textType={'middle'}
                    textSize={'sixteen'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text={'1-x xonali kvartira, 34.2  m2 , 4/9 qavat'}
                />
            </div>
            <div className={styles.rightBox}>
                <Text
                    textType={'middle'}
                    textSize={'sixteen'}
                    textColor={'darkBlue'}
                    cursor={'Cursor'}
                    text='35 000 $'
                />
                <Text
                    textType={'middle'}
                    textSize={'sixteen'}
                    textColor={'darkBlue'}
                    cursor={'Cursor'}
                    text={'21.6  m2 dan'}
                />
                <div className={styles.finishBox}>
                    <FinishPurpeIcon />
                    <Text
                        textType={'middle'}
                        textSize={'sixteen'}
                        textColor={'darkBlue'}
                        cursor={'Cursor'}
                        text={'Tugallandi'}
                    />
                </div>
            </div>
        </div>
    )
}

export default CollapseItem
