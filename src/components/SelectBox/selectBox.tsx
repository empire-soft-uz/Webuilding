import React from 'react'
import styles from "./selectBox.module.css"
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import styled from 'styled-components'

const SelectBox = () => {
    const [age, setAge] = React.useState('all')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <Container className={styles.container}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className={styles.select}
                id='demo-simple-select'
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
        </Container>
    )
}

export default SelectBox


const Container = styled.div`

    @media (max-width: 576px) {

        flex: 1;
        width: 100%;
        height: 35px;
        border-radius: 7px;

        .MuiSelect-select {
            font-size: 14px;
            padding: 10px 7px;
        }
    }

`
