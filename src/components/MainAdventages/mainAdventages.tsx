import React from 'react'
import useRootStore from '../../Hooks/useRootStore'
import Text from '../Text/text'
import styles from "./mainAdventages.module.css"
import { observer } from "mobx-react"

const MainAdventages = () => {
    const { oneProduct } = useRootStore().oneProductStore
    return (
        <div className={styles.container}>
            <Text
                textType={'middle'}
                textSize={'sixteen'}
                textColor={'black'}
                cursor={'Cursor'}
                text="Asosiy afzalliklari"
                style={{ marginBottom: "30px" }}
            />
            <Text
                textType={'middle'}
                textSize={'fourteen'}
                textColor={'black'}
                cursor={'Cursor'}
                style={{ marginBottom: "30px" }}
                text="Joylashuv, transportga kirish imkoniyati"
            />
            {oneProduct.accessLocationToTr.map((e, index) => {
                return (
                    <Text
                        key={index}
                        textType={'middle'}
                        textSize={'twelve'}
                        textColor={'darkGrey'}
                        cursor={'Cursor'}
                        style={{ marginBottom: "30px" }}
                        text={e.text}
                    />
                )
            })}

        </div>
    )
}

export default observer(MainAdventages)
