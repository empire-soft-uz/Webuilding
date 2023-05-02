import React from 'react';
import styles from "./banner.module.css";
import Text from '../../../../../../components/Text/text';
import Button from '../../../../../../components/Button/button';
import { COLORS } from '../../../../../../constants/color';
import SymbolItem from '../../../../../../components/SymbolItem/symbolItem';
import { PersonIcon } from '../../../../../../assets/icons';
import { BannerData } from '../../../../../../constants/bannerData';
import Dot from '../../../../../../components/Dot/dot';
import styled from 'styled-components';

interface Props {
    imgUrl?: any
}

const date = new Date()

// 17.08.2021 12:00
const dateFormat = (date: Date) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}

// Bosh sahifa > Toshkent > 0N1234
const breadcrumbs = [
    {
        title: 'Bosh sahifa',
        url: '/main'
    },
    {
        title: 'Toshkent',
        url: '/main/tashkent'
    },
    {
        title: '0N1234',
        url: '/main/tashkent/0N1234'
    }
]

const BannerForProduct: React.FC<Props> = ({
    imgUrl,
}) => {

    return (
        <Conatiner className={styles.container}>
            <img className={styles.image} src={imgUrl} alt="" />
            <div className={styles.main}>
                <div className={styles.aboveBox}>
                    <div className={styles.blurBox}>
                        <div>
                            <div className={styles.breadcrumbs}>
                                {
                                    breadcrumbs.map((item, index) => {
                                        return (
                                            <div key={index} className={styles.breadcrumb}>
                                                <Text cursor='none' textColor='white' textSize='ten' textType='middle' text={item.title} />
                                                {
                                                    index !== breadcrumbs.length - 1 &&
                                                    <Dot color='white' size={'three'} border={'fifty'} />
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Button className='groupName' textSize={'fourteen'} btnSize={'avarage'} btnColor={'lightPurple'} textColor={'textPurple'} borderRadius={'thirty'} title={BannerData[0].cc} />
                            <Text className='name' style={{ marginTop: "10px" }} textType={'middle'} textSize={'thirty'} textColor={'white'} cursor={'Cursor'} text={BannerData[0].name} />
                            <div className={styles.locationBox}>
                                <Text className='location' cursor='none' textColor='white' textSize='ten' textType='middle' text='Toshkent shahar, Yangi Hayot tumani, O’zar ko’chasi  72-uy 47' />
                            </div>
                            <div className={styles.simpleInfo}>
                                <SymbolItem className='target' dot={true} dotColor={COLORS.orange} text={BannerData[0].station} textColor={COLORS.white} />
                                <SymbolItem className='targetToTime' icon={<PersonIcon />} dotColor={COLORS.orange} text={BannerData[0].stationTime} textType='Montserrat3' textColor={COLORS.white} textSize='12px' />
                            </div>
                            <div className={styles.advertising}>
                                <Button className='button' textSize={'fourteen'} btnSize={'middle'} btnColor={'purple'} textColor={'textWhite'} borderRadius={'five'} title='Kvartirani tanlang' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Conatiner>
    )
}

export default BannerForProduct


const Conatiner = styled.div`
    position: relative;
    

    @media (max-width: 768px) {
        .name {
            font-size: 25px;
        }

        .location{
            margin-top: 10px;
        }

        .target{
            div{
                width: 7px;
                height: 7px;
            }

            p{
                font-size: 12px;
            }
        }

        .targetToTime{
            svg{
                width: 16px;
                height: 16px;
            }

            p{
                font-size: 12px;
            }
        }

        .button{
            height: 50px;
            padding: 15px 20px;
        }

        .groupName{
            width: 120px;
            height: 30px;
            padding: 15px 20px;

            p{
                font-size: 12px;
            }
        }
    }
`