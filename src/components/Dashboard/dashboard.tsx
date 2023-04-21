import React, { useState } from 'react'
import { LocationIcon, LogoIcon } from '../../assets/icons'
import { CategoryData } from '../../constants/categoryData'
import { ASSETS } from '../../constants/requireAssets'
import styles from "./dashboard.module.css"
import Text from '../Text/text'
import Button from '../Button/button'
import Dot from '../Dot/dot'
import { COLORS } from '../../constants/color'

const Dashboard = () => {
    const [active, setActive] = useState(1)
    const Category = (item: any) => {
        setActive(item)
    }
    return (
        <div className={styles.container}>
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
                <Text style={{ marginTop: "5px" }} textType={'middle'} textSize={'fourteen'} textColor={'purple'} cursor={'Cursor'} text={"Sizga qo'ng'iroq qilaylikmi?"} />
            </div>
        </div>
    )
}

export default Dashboard
