import React from 'react'
import Button from '../Button/button'
import styles from "./roomsSelect.module.css"

const RoomsSelect = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>Xonalar</p>
            </div>
            <div className={styles.center}>
                <Button
                    textSize={'fourteen'}
                    btnSize={'small'}
                    btnColor={'purple'}
                    textColor={'textWhite'}
                    borderRadius={'five'}
                    title={"Studiyalar"}
                />
                <div className={styles.itemBox}>
                    <p className={styles.item}>1</p>
                    <p className={styles.item}>2</p>
                    <p className={styles.itemThree}>3</p>
                    <p className={styles.item}>4</p>
                    <p className={styles.item}>5+</p>
                </div>
            </div>
        </div>
    )
}

export default RoomsSelect
