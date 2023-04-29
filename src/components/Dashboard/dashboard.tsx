import React, { useState } from 'react'
import { CloseIcon, LocationIcon, LogoIcon, MenuIcon, MobileIcon } from '../../assets/icons'
import { CategoryData } from '../../constants/categoryData'
import { ASSETS } from '../../constants/requireAssets'
import styles from "./dashboard.module.css"
import Text from '../Text/text'
import Button from '../Button/button'
import Dot from '../Dot/dot'
import { COLORS } from '../../constants/color'

const Dashboard = () => {
    const [active, setActive] = useState(1)
    const [isClose, setIsClose] = useState(false)
    const Category = (item: any) => {
        setActive(item)
    }
    const Dashboard = () => {
        setIsClose((e) => !e)
    }

    return (
        <>
            <div className={styles.closeHeader}>
                <div className={styles.closeBox} onClick={() => Dashboard()}>
                    {
                        isClose ?
                            <CloseIcon /> :
                            <MenuIcon />
                    }
                </div>
                <div className={styles.headerBox}>
                    <Text
                        textType={'middle'}
                        textSize={'sixteen'}
                        textColor={'darkGrey'}
                        text="Webuilding"
                    />
                </div>
                <a href='tel:+998 93 533 13 35' className={styles.contact}>
                    <div className={styles.number}>
                        <Text
                            textType={'middle'}
                            textSize={'fourteen'}
                            textColor={'purple'}
                            text="+998 93 533 13 35"
                        />
                    </div>
                    <MobileIcon />
                </a>
            </div>
            <div className={styles.container} style={{ top: isClose ? "0vh" : "-100vh" }}>
                <div className={styles.topBox}>
                    <div className={styles.logoBox}>
                        <LogoIcon />
                    </div>
                    <div className={styles.btnLocation}>
                        <Button
                            textSize={'fourteen'}
                            btnSize={'avarage'}
                            btnColor={'outline'}
                            textColor={'textPurple'}
                            borderRadius={'thirty'}
                            title={'Tashkent ...'}
                            iconUrl={<LocationIcon />}
                        />
                    </div>
                    <div className={styles.categoryBox}>
                        {CategoryData.map((e, index) => {
                            return (
                                <div className={styles.textBox} key={index} onClick={() => Category(e.id)}>
                                    {active === e.id ?
                                        <Dot color={COLORS.purple} size={'seven'} border={'fifty'} /> : <div className={styles.emptyPlace}></div>
                                    }
                                    <Text textType={'middle'} textSize={'sixteen'} textColor={'darkGrey'} cursor={'Cursor'} text={e.name} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.bottomBox}>
                    <Text textType={'middle'} textSize={'sixteen'} textColor={'darkGrey'} cursor={'Cursor'} text={'+998 ( 99 ) 310 37 63'} />
                    <Text style={{ marginTop: "10px" }} textType={'middle'} textSize={'fourteen'} textColor={'purple'} cursor={'Cursor'} text={"Sizga qo'ng'iroq qilaylikmi?"} />
                </div>
            </div>
        </>
    )
}

export default Dashboard
