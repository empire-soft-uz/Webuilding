import { Face } from '@mui/icons-material'
import { MenuItem, Select } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { GreenDownIcon } from '../../assets/icons'
import useRootStore from '../../Hooks/useRootStore'
import Chart from '../Chart/chart'
import Item from '../Item/item'
import Text from '../Text/text'
import styles from "./invest.module.css"
import { observer } from "mobx-react"

const Invest = () => {

    const [value, setValue] = React.useState('all');
    const { oneProduct } = useRootStore().oneProductStore
    return (
        <Container className={styles.container}>
            <div className={`${styles.topBox} topBox`}>
                <div className={styles.text}>
                    <Text
                        textType={'middle'}
                        textSize={'sixteen'}
                        textColor={'black'}
                        cursor={'Cursor'}
                        text="Investitsion jozibadorlik"
                    />
                </div>
                <div className='filterBtnBox'>
                    <div className='btnsBox'>
                        <button className='filterBtn firstBtn'>
                            Barcha kvartiralar
                        </button>
                        <button className='filterBtn'>
                            1 xonali
                        </button>
                        <button className='filterBtn'>
                            2 xonali
                        </button>
                        <button className='filterBtn'>
                            3 xonali
                        </button>
                        <button className='filterBtn endBtn'>
                            4 xonali
                        </button>
                    </div>
                    <div className="selectBox">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{
                                color: '#515050',
                                fontSize: '14px',
                                "& fieldset": {
                                    border: "none",
                                },
                                '.MuiSvgIcon-root ': {
                                    fill: "#515050 !important",
                                }
                            }}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className='select'
                        >
                            <MenuItem value={'all'}>Barcha kvartiralar</MenuItem>
                            <MenuItem value={'one'}>1 xonali</MenuItem>
                            <MenuItem value={'two'}>2 xonali</MenuItem>
                            <MenuItem value={'three'}>3 xonali</MenuItem>
                            <MenuItem value={'four'}>4 xonali</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
            <div className={`${styles.content} content`}>
                <div className={`${styles.infoBox} infoBox`}>
                    <div className={styles.info}>
                        <Item
                            icon={<Face />}
                            title={oneProduct.investment.text}
                            text={oneProduct.investment.middlePrice}
                            greyText
                        />
                    </div>
                    <div className={`${styles.AllPrices} AllPrices`}>
                        <div className={styles.item}>
                            <Text
                                textType={'middle'}
                                textSize={'twelve'}
                                textColor={'grey'}
                                cursor={'Cursor'}
                                text="Kvartira uchun o'rtacha narx"
                            />
                            <div className={styles.pricesBox}>
                                <p className={styles.price}>
                                    {oneProduct.investment.flatMiddlePrice}
                                </p>
                                <p className={styles.fell}>
                                    <span className={styles.downIcon}>
                                        <GreenDownIcon />
                                    </span>
                                    {oneProduct.investment.flatMiddlePriceDown}
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <Text
                                textType={'middle'}
                                textSize={'twelve'}
                                textColor={'grey'}
                                cursor={'Cursor'}
                                text="Kvadrat metr uchun o'rtacha narx. metr"
                            />
                            <div className={styles.pricesBox}>
                                <p className={styles.price}>
                                    {oneProduct.investment.squareMiddlePrice}
                                </p>
                                <p className={styles.fell}>
                                    <span className={styles.downIcon}>
                                        <GreenDownIcon />
                                    </span>
                                    {oneProduct.investment.squareMiddlePriceDown}
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <Text
                                textType={'middle'}
                                textSize={'twelve'}
                                textColor={'grey'}
                                cursor={'Cursor'}
                                text="Sotilgan kvartiralar"
                            />
                            <div className={styles.pricesBox}>
                                <p className={styles.price}>
                                    {oneProduct.investment.soldFlatsfFrom}
                                </p>
                                <p className={styles.count}>
                                    {oneProduct.investment.soldFlatsf}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.chartBox} chartBox`}>
                    <Chart />
                </div>
            </div>
        </Container>
    )
}

export default observer(Invest)


const Container = styled.div`
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;

    .content {
        width: 100%;
        display: grid;
        grid-template-columns: 0.4fr 1fr;
        gap: 15px;

        .infoBox {
            margin-top: 0;

            .AllPrices {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
        }

        .chartBox {
            /* max-width: 60vw; */
            /* flex: 1; */
        }
    }

    .topBox {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
    }

    .filterBtnBox {
        display: flex;

        .filterBtn {
            padding: 10px 20px;
            border: 1px solid #E5E5E5;
            border-left: none;
            background-color: #fff;
            color: #000;
            font-size: 12px;
            font-weight: 500;

            &:hover {
                background-color: '#fff';
                border: 1px solid #8A3FFC;
            }
        }

        .firstBtn {
            border-left: 1px solid #E5E5E5;
            border-radius: 7px 0 0 7px;
        }

        .endBtn {
            border-radius: 0 7px 7px 0;
        }

        .filterBtn.active {
            background-color: #8A3FFC;
            color: #fff;
            border: 1px solid #8A3FFC;
        }

        .selectBox {
            display: none;
        }
    }

    @media (max-width: 1300px) {

        .topBox {
            margin-bottom: 0;
        }

        .content {
            display: flex !important;
            flex-direction: column !important;

            .infoBox {
                width: 100%;
                height: auto !important;
                margin-bottom: 20px;
                box-shadow: none !important;
                flex-wrap: wrap !important;

                .AllPrices {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    flex-direction: row !important;
                    gap: 20px;
                }
            }

            .chartBox {
                overflow: hidden;
                max-width: none;
            }
        }
    }

    @media (max-width: 992px) {

        .filterBtnBox {
            .filterBtn {
                padding: 10px 15px;
            }
        }
    }

    @media (max-width: 768px) {
        .topBox {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 576px) {
        .topBox {
            flex-direction: column;
            justify-content: start;
            align-items: start;
            gap: 10px;
            margin-bottom: 0;

            .filterBtnBox {
                flex-direction: column;
                .btnsBox {
                    display: none;
                }
                
                .selectBox {
                    display: flex;
                     #demo-simple-select {
                        width: 115px;
                        padding: 0 !important;
                        padding-right: 32px !important;
                    }
                }
            }
        }

        .content {
            .infoBox {
                div {
                    padding-left: 0;
                }
            }
        }
    }
`