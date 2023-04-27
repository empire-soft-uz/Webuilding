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
            <div className={`${styles.summary} ${isActivated(data.id) ? styles.active : ''}`}>
                <div style={{ display: 'flex', gap: '11px', alignItems: 'center' }} className='title1'>
                    <TableIcon />
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} >
                        <Text textColor='darkBlue' textType='bold' textSize='twelve'>
                            {data.name}
                        </Text>
                        <ArrowDownIcon />
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
        )
    }



    return (
        <div className={styles.container}>
            {
                data.map((item: DataType) => (
                    <Collapsible trigger={trigger(item)} onOpen={() => setOpenId({ ...openId, [item.id]: true })} key={item.id} onClose={() => setOpenId({ ...openId, [item.id]: false })}>
                        <div className={styles.accordionDetails}>
                            <CollapseFilter />
                            {
                                item.data.map((item2: triggerData) => {
                                    if (item2.id === item.data.length)
                                        return (
                                            <CollapseItem end />
                                        )
                                    return (
                                        <CollapseItem />
                                    )
                                })
                            }
                        </div>
                    </Collapsible>
                ))
            }
        </div>
    )
}

export default CollapseView
