import { MenuItem, Select } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants/color'
import Collapse from '../Collapse/collapse'
import Text from '../Text/text'
import styles from "./collapseContent.module.css"

const CollapseContent = () => {

    const [value, setValue] = React.useState('all');

    return (
        <Container className={styles.container}>
            <Text
                className='title'
                textType={'middle'}
                textSize={'twenty'}
                textColor={'black'}
                cursor={'none'}
                text={'JK “Yangi choshtepa” ishlab chiqaruvchidan 56 ta xonadon'}
                style={{ marginBottom: "20px" }}
            />
            {/* <DropdownMenu option='Barcha korpus' textColor={COLORS.purple} textSize='16px' /> */}
            <div className='selectBox'>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{
                        color: COLORS.purple,
                        "& fieldset": {
                            border: "none",
                        },
                        '.MuiSvgIcon-root ': {
                            fill: "#8A3FFC !important",
                        }
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='select'
                >
                    <MenuItem value={'all'}>Barcha korpus</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <Text
                className='mainText'
                textType={'middle'}
                textSize={'fourteen'}
                textColor={'black'}
                cursor={'none'}
                text={'2023-yil II-B da yetkazish'}
                style={{ margin: "10px 0 20px 0" }}
            />
            <Collapse />
        </Container>
    )
}

export default CollapseContent


const Container = styled.div`
    width: 100%;
    height: auto;

    .selectBox {
        #demo-simple-select {
            width: 110px;
            padding: 0 !important;
            padding-right: 32px !important;
        }
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        .title {
            font-size: 18px;
        }
    }

    @media (max-width: 576px) {
        .title {
            font-size: 16px;
            margin-bottom: 10px !important;
        }

        .selectBox {
            #demo-simple-select {
                width: 95px;
                font-size: 14px;
            }

            font-size: 14px;
            margin-bottom: 10px;
        }

        .mainText {
            font-size: 12px;
            margin-bottom: 10px !important;
        }
    }

`
