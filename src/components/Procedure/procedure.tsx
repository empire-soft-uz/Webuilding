import React from 'react'
import BuildingBody from '../BuildingBody/buildingBody'
import Button from '../Button/button'
import DropdownMenu from '../DropdownMenu/dropdownMenu'
import ProductSizesCarusel from '../ProductSizesCarusel/productSizesCarusel'
import SelectBox from '../SelectBox/selectBox'
import Text from '../Text/text'
import styles from "./procedure.module.css"

const Procedure = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text
                    textType={'middle'}
                    textSize={'twenty'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text="Tartiblar"
                />
                <Button
                    textSize={'fourteen'}
                    btnSize={'small'}
                    btnColor={'lightPurple'}
                    textColor={'textPurple'}
                    borderRadius={'ten'}
                    title="56"
                />
            </div>
            <div className={styles.body}>
                <BuildingBody />
                <ProductSizesCarusel />
            </div>
        </div>
    )
}

export default Procedure;
