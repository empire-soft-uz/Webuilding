import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../../../components/Banner/banner'
import Button from '../../../../components/Button/button'
import FinishTimeFilter from '../../../../components/FinishTimeFilter/finishTimeFilter'
import FloorFilter from '../../../../components/FloorFilter/floorFilter'
import InfoCardItem from '../../../../components/InfoCardItem/infoCardItem'
import PriceFilter from '../../../../components/PriceFilter/priceFilter'
import ProductItem from '../../../../components/ProductItem/productItem'
import RoomsSelect from '../../../../components/RoomsSelect/roomsSelect'
import SizeFilter from '../../../../components/SizeFilter/sizeFilter'
import SwiperComp from '../../../../components/Swiper/swiper'
import ViewMap from '../../../../components/ViewMap/viewMap'
import { COLORS } from '../../../../constants/color'
import { ProductData } from '../../../../constants/productData'
import { ASSETS } from '../../../../constants/requireAssets'
import { APP_ROUTES } from '../../../../routes/app-router'
import styles from "./main.module.css"

const Main = () => {
    const navigation = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                {/* <Banner imgUrl={ASSETS.tashkent1} /> */}
                <SwiperComp />
                <div className={styles.infoBox}>
                    <div className={styles.infoCard}>
                        <RoomsSelect />
                        <PriceFilter label='Narxi, ming $' />
                        <SizeFilter label='Maydoni, m²' />
                        <FinishTimeFilter from={new Date()} to={new Date("Thu Dec 27 2025")} label='Topshirish muddati' />
                        <FloorFilter label='Qavat' />
                        <Button
                            textSize={'fourteen'}
                            btnSize={'large'}
                            btnColor={'purple'}
                            textColor={'textWhite'}
                            borderRadius={'ten'}
                            title={"306 ta yangi binolarni ko'rish"}
                            style={{
                                height: "50px",
                                width: "274px"
                            }}
                        />
                    </div>
                    <ViewMap />
                </div>
            </div>
            <div className={styles.productBox}>
                {
                    ProductData.map((e, index) => {
                        return (
                            <ProductItem
                                key={index}
                                symbolDotColor={COLORS.orange}
                                image={e.images[0].image}
                                company={e.company}
                                name={e.name}
                                homeCount={e.homeCount}
                                near={e.near}
                                nearTime={e.nearTime}
                                price={e.price}
                                time={e.process}
                                symbolDotIcon={e.symbolDotIcon}
                                onPress={() => navigation(APP_ROUTES.PRODUCT)}
                                minexpense={e.minExpense}
                                studios={e.studios}
                                oneRoom={e.oneRoom}
                                twoRooms={e.twoRooms}
                                threeRooms={e.threeRooms}
                                fourRooms={e.fourRooms}
                                fiveRooms={e.fiveRooms}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main
