import React from 'react'
import CountBtn from '../CountBtn/countBtn'
import SelectBox from '../SelectBox/selectBox'
import Text from '../Text/text'
import styles from "./buildingBody.module.css"

const BuildingBody = () => {
    return (
        <div className={styles.container}>
            <div>
                <Text
                    textType={'middle'}
                    textSize={'fourteen'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text="Korpus"
                    style={{ marginBottom: "10px" }}
                />
                <SelectBox />
            </div>
            <div className={styles.rightBox}>
                <Text
                    textType={'middle'}
                    textSize={'fourteen'}
                    textColor={'black'}
                    cursor={'Cursor'}
                    text="Korpus"
                    style={{ marginBottom: "10px" }}
                />
                <div className={styles.filter}>
                    <CountBtn countBtnType='outline' title='Studiya' />
                    <CountBtn countBtnType='outline' title='1' />
                    <CountBtn countBtnType='outline' title='2' />
                    <CountBtn countBtnType='outline' title='3' />
                    <CountBtn countBtnType='outline' title='4' />
                    <CountBtn countBtnType='outline' title='5+' />
                </div>
            </div>
        </div>
    )
}

export default BuildingBody
