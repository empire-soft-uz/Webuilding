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
import useRootStore from '../../../../../../Hooks/useRootStore';
import { observer } from "mobx-react"

interface Props {
    imgUrl?: any
    name?: string;
    location?: string;
    cc?: string;
    station?: string;
    stationTime?: string;
    locationName?: string;
    houseNumber?: number | string;
}

// Bosh sahifa > Toshkent > 0N1234

const BannerForProduct: React.FC<Props> = ({
    imgUrl,
    location,
    locationName,
    name,
    cc,
    station,
    stationTime,
    houseNumber
}) => {
    const { oneProduct } = useRootStore().oneProductStore
    const breadcrumbs = [
        {
            title: 'Bosh sahifa',
            url: '/main'
        },
        {
            title: oneProduct.locationName,
            url: '/main/tashkent'
        },
        {
            title: oneProduct.houseNumber,
            url: '/main/tashkent/0N1234'
        }
    ]
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
                            {/* <Button
                                className='groupName'
                                textSize={'fourteen'}
                                btnSize={'avarage'}
                                btnColor={'lightPurple'}
                                textColor={'textPurple'}
                                borderRadius={'thirty'}
                                title={cc}
                            /> */}
                            <Text
                                className='name'
                                style={{ marginTop: "10px" }}
                                textType={'middle'}
                                textSize={'thirty'}
                                textColor={'white'}
                                cursor={'Cursor'}
                                text={name} />
                            <div className={styles.locationBox}>
                                <Text className='location' cursor='none' textColor='white' textSize='ten' textType='middle' text={location} />
                            </div>
                            <div className={styles.simpleInfo}>
                                <SymbolItem
                                    className='target'
                                    dot={true}
                                    dotColor={COLORS.orange}
                                    text={station}
                                    textColor={COLORS.white}
                                />
                                <SymbolItem
                                    className='targetToTime'
                                    icon={<PersonIcon />}
                                    dotColor={COLORS.orange}
                                    text={stationTime}
                                    textType='Montserrat3'
                                    textColor={COLORS.white}
                                    textSize='12px' />
                            </div>
                            <div className={styles.advertising}>
                                <Button
                                    className='button'
                                    textSize={'fourteen'}
                                    btnSize={'middle'}
                                    btnColor={'purple'}
                                    textColor={'textWhite'}
                                    borderRadius={'five'}
                                    title='Kvartirani tanlang'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Conatiner>
    )
}

export default observer(BannerForProduct)


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