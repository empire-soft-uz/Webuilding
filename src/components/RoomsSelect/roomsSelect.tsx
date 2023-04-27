import React, { useState } from 'react'
import { COLORS } from '../../constants/color'
import { FilterData } from './filterData'
import styles from "./roomsSelect.module.css"

const RoomsSelect = () => {
    const [state, setState] = useState()
    const Checked = (value: any) => {
        setState(value)

    }
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p>Xonalar</p>
            </div>
            <div className={styles.center}>
                <input
                    type={"button"}
                    className={styles.item}
                    onClick={(e: any) => Checked(e.target.value)}
                    value={"Studialar"}
                    style={{
                        backgroundColor: state === "Studialar" ? COLORS.purple : "transparent",
                        color: state === "Studialar" ? COLORS.white : COLORS.black,
                    }}
                />
                <div className={styles.itemBox}>
                    {FilterData.map((e, index) => {
                        return (
                            <input
                                style={{
                                    backgroundColor: state === e.id ? COLORS.purple : "transparent",
                                    color: state === e.id ? COLORS.white : COLORS.black
                                }}
                                key={index}
                                type={"button"}
                                onClick={() => Checked(e.id)}
                                className={styles.item}
                                value={e.type} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RoomsSelect
