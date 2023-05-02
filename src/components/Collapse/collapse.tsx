import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./collapse.module.css"
import { COLORS } from '../../constants/color';
import { ArrowDownIcon, TableIcon } from '../../assets/icons';
import CollapseFilter from '../collapseFilter/collapseFilter';
import CollapseItem from '../collapseItem/collapseItem';
import { ASSETS } from '../../constants/requireAssets';
import Collapsible from 'react-collapsible';
import Text from '../Text/text';
import styled, { css } from 'styled-components';

const data = [
    {
        id: 1,
        name: "1-XONALI",
        area: "21.6 M2 DAN",
        price: "6.3 - 8.7 MLN $ DAN",
        count: "25 TA TAKLIFLAR",
        data: [
            {
                id: 1,
                img: ASSETS.room,
                text: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 2,
                img: ASSETS.room,
                text: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 1,
                img: ASSETS.room,
                text: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 2,
                img: ASSETS.room,
                text: "1-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            }
        ]
    },
    {
        id: 2,
        name: "2-XONALI",
        area: "21.6 M2 DAN",
        price: "6.3 - 8.7 MLN $ DAN",
        count: "25 TA TAKLIFLAR",
        data: [
            {
                id: 1,
                img: ASSETS.room,
                text: "2-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 2,
                img: ASSETS.room,
                text: "2-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 3,
                img: ASSETS.room,
                text: "2-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 4,
                img: ASSETS.room,
                text: "2-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            }
        ]
    },
    {
        id: 3,
        name: "3-XONALI",
        area: "21.6 M2 DAN",
        price: "6.3 - 8.7 MLN $ DAN",
        count: "25 TA TAKLIFLAR",
        data: [
            {
                id: 1,
                img: ASSETS.room,
                text: "3-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 2,
                img: ASSETS.room,
                text: "3-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 3,
                img: ASSETS.room,
                text: "3-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 4,
                img: ASSETS.room,
                text: "3-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            }
        ]
    },
    {
        id: 4,
        name: "4-XONALI",
        area: "21.6 M2 DAN",
        price: "6.3 - 8.7 MLN $ DAN",
        count: "25 TA TAKLIFLAR",
        data: [
            {
                id: 1,
                img: ASSETS.room,
                text: "4-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 2,
                img: ASSETS.room,
                text: "4-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 3,
                img: ASSETS.room,
                text: "4-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            },
            {
                id: 4,
                img: ASSETS.room,
                text: "4-x xonali kvartira, 34.2  m2 , 4/9 qavat",
                price: "35 000 $",
                area: "21.6  m2 dan",
                finish: "Tugallandi"
            }
        ]
    }
]

type DataType = {
    id: number,
    name: string,
    area: string,
    price: string,
    count: string,
    data: Array<{
        id: number,
        img: string,
        text: string,
        price: string,
        area: string,
        finish: string
    }>
}

type triggerData = {
    id: number,
    img: string,
    text: string,
    price: string,
    area: string,
    finish: string
}

const CollapseView = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [openId, setOpenId] = React.useState<{
        [key: string]: boolean
    }>({});

    const isActivated = (id: number) => {
        return openId[id] ? true : false
    }

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    // data type data in triggerData type
    const trigger = (data: DataType) => {
        return (
            <TriggerBox>
                <div className={`${styles.summary} ${isActivated(data.id) ? styles.active : ''} triggerFirstBox`}>
                    <div style={{ display: 'flex', gap: '11px', alignItems: 'center' }} className='title1'>
                        <TableIcon className='tableIcon' />
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} >
                            <Text textColor='darkBlue' textType='bold' textSize='twelve'>
                                {data.name}
                            </Text>
                            <ArrowDownIcon className='arrowIcon' />
                        </div>
                    </div>
                    <Text style={{
                        marginRight: '50px',
                        justifySelf: 'center',
                    }} className='title2' textColor='darkBlue' textType='bold' textSize='twelve'>
                        {data.area}
                    </Text>
                    <Text style={{
                        marginLeft: '20px',
                        justifySelf: 'center',
                    }} className='title3' textColor='darkBlue' textType='bold' textSize='twelve'>
                        {data.price}
                    </Text>
                    <Text style={{
                        justifySelf: 'end',
                    }} className='title4' textColor='purple' textType='bold' textSize='twelve'>
                        {data.count}
                    </Text>
                </div>
            </TriggerBox>
        )
    }



    return (
        <Container className={styles.container}>
            {
                data.map((item: DataType, index: number) => (
                    <div className="colapsibleMediaBox">
                        <Collapsible className='collapsible' trigger={trigger(item)} onOpen={() => setOpenId({ ...openId, [item.id]: true })} key={index} onClose={() => setOpenId({ ...openId, [item.id]: false })}>
                            <div className={styles.accordionDetails}>
                                <CollapseFilter />
                                {
                                    item.data.map((item2: triggerData, index: number) => {
                                        if (item2.id === item.data.length)
                                            return (
                                                <CollapseItem end key={index} />
                                            )
                                        return (
                                            <CollapseItem key={index} />
                                        )
                                    })
                                }
                            </div>
                        </Collapsible>
                        <div className="SecondMainMediaBox">
                            <div className="main">
                                <Text className='title1' textColor='darkBlue' textType='middle' textSize='twelve'>
                                    {item.name}
                                </Text>
                                <Text className='title2' textColor='darkGrey' textType='light' textSize='fourteen'>
                                    {item.area}
                                </Text>
                                <Text className='title3' textColor='black' textType='semiBold' textSize='twelve'>
                                    {item.price}
                                </Text>
                                <Text className='title4' textColor='darkGrey' textType='light' textSize='twelve'>
                                    {item.count}
                                </Text>
                            </div>
                            <div className='iconBox'>
                                <ArrowDownIcon className='arrowIcon' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}

export default CollapseView

const Container = styled.div`
    border: none !important;
    border-radius: 0 !important;

    .SecondMainMediaBox {
        display: none;
    }

    @media (max-width: 768px) {
        .collapsible {
            display: none !important;
        }

        .SecondMainMediaBox {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #E5E5E5;

            .main {
                flex: 0.9;
                display: grid;
                grid-area: title1 title2 title3 title4;
                grid-template-areas: 
                    'title1 title3'
                    'title4 title2';
                grid-template-columns: 1fr 1fr;
                row-gap: 5px;

                p{
                    text-transform: lowercase;
                }

                .title1 {
                    margin: 0;
                    grid-area: title1;
                    justify-self: start;
                    font-size: 14px;
                }

                .title2 {
                    margin: 0;
                    grid-area: title2;
                    justify-self: end;
                    font-size: 11px;
                }

                .title3 {
                    margin: 0;
                    grid-area: title3;
                    justify-self: end;
                }

                .title4 {
                    margin: 0;
                    font-size: 11px;
                    grid-area: title4;
                    justify-self: start;
                }
            }

            .iconBox {
                flex: 0.1;
                display: flex;
                justify-content: end;
                align-items: center;
                cursor: pointer;
                svg {
                    transform: rotate(-90deg);
                }
                path {
                    stroke: #a1a1a1;
                }
            }
        }
    }
`

const TriggerBox = styled.div`
`