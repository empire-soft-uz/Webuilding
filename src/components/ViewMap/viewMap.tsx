import React from 'react'
import styles from "./viewMap.module.css"
import { ASSETS } from '../../constants/requireAssets'
import RowItem from '../Rowitem/rowItem'
import { LocationTwoIcon } from '../../assets/icons'

const ViewMap = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={ASSETS.map} alt="" />
            <div className={styles.text}>
                <RowItem text="Xaritada ko'ring" iconUrl={<LocationTwoIcon />} />
            </div>
        </div>
    )
}

export default ViewMap
