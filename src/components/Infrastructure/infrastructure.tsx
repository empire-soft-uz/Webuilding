import React from 'react'
import { ProtectIcon, SchoolBuildingIcon } from '../../assets/icons'
import { LocateIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import { ASSETS } from '../../constants/requireAssets'
import useRootStore from '../../Hooks/useRootStore'
import SimpleBtn from '../SimpleBtn/simpleBtn'
import Text from '../Text/text'
import YandexMap from '../YandexMap/yandexMap'
import styles from "./infrastructure.module.css"
import { observer } from "mobx-react"

const Infrastructure = () => {
    const { oneProduct } = useRootStore().oneProductStore
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Text
                    textType={'middle'}
                    textSize={'twenty'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text="Infrastruktura"
                />
            </div>
            <div className={styles.btnBox}>
                {oneProduct.infrastructure.map((e, index) => {
                    return (
                        <SimpleBtn key={index} dotColor={COLORS.black} text={e.placeName} btnType={'primary'} img={e.icon} />
                    )
                })}
            </div>
            <div className={styles.security}>
                <Text
                    textType={'middle'}
                    textSize={'sixteen'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text="Xavfsizlik"
                />
                <div className={styles.btn}>
                    <SimpleBtn dotColor={''} text={oneProduct.infrastructure[0].security} btnType={'primary'} img={ASSETS.protect} />
                </div>
            </div>
            <div className={styles.mapBox}>
                <YandexMap />
            </div>
        </div>
    )
}

export default observer(Infrastructure)
