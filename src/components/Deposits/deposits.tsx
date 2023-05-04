import styled from 'styled-components'
import { AreaIcon, BateryIcon, BuildingIcon, CalendarIcon, FinishIcon, FloorNumberIcon, HomeIcon, HomeTypeIcon, Organizator, PhoneIcon, ShiftIcon } from '../../assets/icons'
import Button from '../Button/button'
import Item from '../Item/item'
import Text from '../Text/text'
import DepositItem from '../depositItem/depositItem'
import styles from "./deposits.module.css"
import useRootStore from '../../Hooks/useRootStore'
import { observer } from "mobx-react"

const Deposits = () => {
    const { oneProduct } = useRootStore().oneProductStore
    return (
        <Container className={styles.container}>
            <div className={styles.topBox}>
                <Text textColor="darkGrey" textSize='twelve' textType='bold' cursor='none' text='Depozitlar' />
            </div>
            <div className={styles.depositItemBox}>
                <DepositItem className='depositItem' />
            </div>
            <div className={styles.depositItemBox}>
                <div className={styles.priceBox}>
                    <div className={styles.price}>
                        <Text textColor="darkGrey" textSize='fourteen' textType='semiBold' cursor='none' text='Sotish uchun mavjud' />
                        <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                            <Text textColor="grey" textSize='fourteen' textType='middle' cursor='none' text='64 dan' />
                            <Text textColor="grey" textSize='fourteen' textType='bold' cursor='none' text='56' />
                            <Text textColor="grey" textSize='fourteen' textType='middle' cursor='none' text='tasi' />
                        </div>
                    </div>
                    {/* <div>
                        <BateryIcon />
                    </div> */}
                </div>
            </div>
            <div className={`${styles.featureBox}`}>
                <div className={`${styles.features} featureItemsBox`}>
                    <Item
                        text={oneProduct.flatPlaces}
                        title='Kvartira maydonlari'
                        icon={<AreaIcon />}
                        greyTitle
                    />
                    <Item
                        text={oneProduct.finishTime}
                        title='Topshirish muddati'
                        icon={<CalendarIcon />}
                        greyTitle
                    />
                    <Item
                        icon={<BuildingIcon />}
                        title={oneProduct.buildings}
                        text='Binolar'
                        greyTitle
                    />
                    <Item
                        icon={<ShiftIcon />}
                        text={oneProduct.ceilings}
                        title='Shiftlar'
                        greyTitle
                    />
                    <Item
                        icon={<HomeTypeIcon />}
                        title="Uy turi"
                        text={oneProduct.homeType}
                        greyTitle
                    />
                    <Item
                        icon={<HomeIcon />}
                        title='Sinf'
                        text={oneProduct.class}
                        greyTitle
                    />
                    <Item
                        icon={<FloorNumberIcon />}
                        title='Qavatlar soni'
                        text={oneProduct.floorNumbers}
                        greyTitle
                    />
                    <Item
                        icon={<FinishIcon />}
                        title='Tugatish variantlari'
                        text={oneProduct.finishVariants}
                        greyTitle
                    />
                </div>
                <div className={styles.more}>
                    <Text textColor="purple" textSize='twelve' textType='middle' cursor='none' text='Barcha xususiyatlar' />
                </div>
            </div>
            <div className={`${styles.boxBottom} btnsBottomBox`}>
                <div className={styles.bottom}>
                    <div className={styles.priceBox}>
                        <div className={styles.price}>
                            <Text textColor="darkGrey" textSize='twelve' textType='middle' cursor='none' text='Ishlab chiquvchi' />
                            <Text textColor="darkBlue" textSize='fourteen' textType='bold' cursor='none' text={oneProduct.producerTeam} />
                        </div>
                        <div>
                            <Organizator />
                        </div>
                    </div>
                </div>
                <div className={`${styles.btnBox} btnsBox`}>
                    <Button borderRadius='ten' textSize='fourteen' btnColor='purple' btnSize='middle' textColor='textWhite' title="Qo' ng'iroq qiling" iconUrl={<PhoneIcon />} />
                    <Button borderRadius='ten' textSize='fourteen' btnColor='lightPurple' btnSize='large' textColor='textPurple' title="Menga qo'ng'iroq qiling" />
                </div>
            </div>
        </Container>
    )
}

export default observer(Deposits)


const Container = styled.div`

    @media (max-width: 992px) {

        /* .depositItem div p:first-of-type {
            font-size: 30px;
        } */

        .featureItemsBox{
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
        }

        .btnsBottomBox{
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding-bottom: 20px;
        }
    }

    @media (max-width: 576px) {
        .btnsBottomBox .btnsBox {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            button {
                width: 40vw;
                align-items: center;
                svg {
                    width: 16px;
                    height: 16px;
                }
                p{
                    font-size: 12px;
                }
            }
        }
    }

    @media (max-width: 465px) {
            .btnsBottomBox .btnsBox {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;

            button {
                width: 100%;
                align-items: center;

                svg {
                    width: 16px;
                    height: 16px;
                }

                p{
                    font-size: 12px;
                }
            }
        }
    }
`