import React from 'react'
import { COLORS } from '../../constants/color'
import { ASSETS } from '../../constants/requireAssets'
import DropdownMenu from '../DropdownMenu/dropdownMenu'
import Text from '../Text/text'
import styles from "./processBuilding.module.css"

const ProcessBuilding = () => {
    return (
        <div className={styles.contianer}>
            <div className={styles.leftBox}>
                <div className={styles.header}>
                    <Text
                        textType={'middle'}
                        textSize={'sixteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="Qurilish jarayoni"
                    />
                    <DropdownMenu option='oktabr 2022' textSize='16px' textColor={COLORS.grey} />
                </div>
                <div className={styles.caruselBox}>
                    <div className={styles.mainImage}>
                        <img className={styles.mainImg} src={ASSETS.pr1} alt="" />
                    </div>
                    <div className={styles.choseImage}>
                        <div className={styles.item}>
                            <img className={styles.img} src={ASSETS.pr1} alt="" />
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={ASSETS.pr1} alt="" />
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={ASSETS.pr1} alt="" />
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={ASSETS.pr1} alt="" />
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={ASSETS.pr1} alt="" />
                        </div>
                        <div className={styles.item}>
                            <img className={styles.img} src={ASSETS.pr1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <span className={styles.line}></span>
            <div className={styles.rightBox}>
                <div className={styles.header}>
                    <Text
                        textType={'middle'}
                        textSize={'sixteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="Ishlab chiquvchidan video taqdimot"
                    />
                </div>
                <div className={styles.videoBox}>
                    <img className={styles.mainVideo} src={ASSETS.pr3} alt="" />
                    <div className={styles.above}>
                        <div className={styles.playBox}>
                            <img className={styles.play} src={ASSETS.play} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProcessBuilding
