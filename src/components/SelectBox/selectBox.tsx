import React from 'react'
import styles from "./selectBox.module.css"
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

const SelectBox = () => {
    const [age, setAge] = React.useState('all')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <div className={styles.container}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className={styles.select}
                sx={{
                    "& fieldset": {
                        border: "none",
                    },
                }}
            >
                <MenuItem value='all'>
                    Barcha holatlar
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </div>
    )
}

export default SelectBox
