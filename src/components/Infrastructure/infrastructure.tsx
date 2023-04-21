import React from 'react'
import { ProtectIcon, SchoolBuildingIcon } from '../../assets/icons'
import { LocateIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import { ASSETS } from '../../constants/requireAssets'
import SimpleBtn from '../SimpleBtn/simpleBtn'
import Text from '../Text/text'
import YandexMap from '../YandexMap/yandexMap'
import styles from "./infrastructure.module.css"

const Infrastructure = () => {
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
                <SimpleBtn dotColor={COLORS.black} text='Maktab' btnType={'primary'} img={ASSETS.schoolBuilding} />
                <SimpleBtn dotColor={COLORS.black} text='Maktab' btnType={'primary'} img={ASSETS.babyFace} />
                <SimpleBtn dotColor={COLORS.black} text='Maktab' btnType={'primary'} img={ASSETS.stethoscope} />
                <SimpleBtn dotColor={COLORS.black} text='Maktab' btnType={'primary'} img={ASSETS.soccerBall} />
                <SimpleBtn dotColor={COLORS.black} text='Maktab' btnType={'primary'} img={ASSETS.cycling} />
                <SimpleBtn dotColor={COLORS.black} text='Maktab' btnType={'primary'} img={ASSETS.holiday} />
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
                    <SimpleBtn dotColor={''} text="Devor bilan o'ralgan perimetr" btnType={'primary'} img={ASSETS.protect} />
                </div>
            </div>
            <div className={styles.mapBox}>
                <YandexMap />
            </div>
        </div>
    )
}

export default Infrastructure
