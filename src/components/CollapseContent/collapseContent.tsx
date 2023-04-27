import React from 'react'
import { COLORS } from '../../constants/color'
import Collapse from '../Collapse/collapse'
import DropdownMenu from '../DropdownMenu/dropdownMenu'
import Text from '../Text/text'
import styles from "./collapseContent.module.css"

const CollapseContent = () => {
    return (
        <div className={styles.container}>
            <Text
                textType={'middle'}
                textSize={'twenty'}
                textColor={'black'}
                cursor={'none'}
                text={'JK “Yangi choshtepa” ishlab chiqaruvchidan 56 ta xonadon'}
                style={{ marginBottom: "20px" }}
            />
            <DropdownMenu option='Barcha korpus' textColor={COLORS.purple} textSize='16px' />
            <Text
                textType={'middle'}
                textSize={'fourteen'}
                textColor={'black'}
                cursor={'none'}
                text={'2023-yil II-B da yetkazish'}
                style={{ margin: "10px 0 20px 0" }}
            />
            <Collapse />
        </div>
    )
}

export default CollapseContent
