import React from 'react'
import styles from "./selectBox.module.css"

const SelectBox = () => {
    return (
        <div className={styles.container}>
            <select className={styles.select}>
                <option value="">Barcha xolatlar</option>
                <option value="">2 xonali</option>
                <option value="">4 xonali</option>
            </select>
        </div>
    )
}

export default SelectBox
