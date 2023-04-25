import React from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../../../components/Banner/banner'
import Button from '../../../../components/Button/button'
import InfoCardItem from '../../../../components/InfoCardItem/infoCardItem'
import ProductItem from '../../../../components/ProductItem/productItem'
import RoomsSelect from '../../../../components/RoomsSelect/roomsSelect'
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
                <Banner imgUrl={ASSETS.tashkent1} />
                <div className={styles.infoBox}>
                    <div className={styles.infoCard}>
                        <RoomsSelect />
                        <InfoCardItem label='Narxi, ming $' from='14.2 dan' to='14.2 gacha' />
                        <InfoCardItem label='Maydoni, m²' from='10.5 dan' to='164.9 gacha' />
                        <InfoCardItem label='Topshirish muddati' from='Tugagan' to='2-chorak 2026' />
                        <InfoCardItem label='Qavat' from='1' to='100' />
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
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main
