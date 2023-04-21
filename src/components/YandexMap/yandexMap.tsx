import React from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps';
import styles from "./yandexMap.module.css"
import SimpleBtn from '../SimpleBtn/simpleBtn';
import { COLORS } from '../../constants/color';
import { LocateIcon } from '../../assets/icons';

const YandexMap = () => {
    return (
        <YMaps>
            <div className={styles.box}>
                <Map
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                    height={100}
                    defaultState={{ center: [41.311158, 69.279737], zoom: 12 }}
                    className={styles.map}
                />
                <div className={styles.btnBox}>
                    <SimpleBtn dotColor={COLORS.black} btnType={'primary'} icon={<LocateIcon />} text="Metro" />
                </div>
            </div>
        </YMaps>
    )
}

export default YandexMap
