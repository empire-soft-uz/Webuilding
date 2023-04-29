import { useState } from 'react';
import { A11y, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ArrowBtn from '../../../../../components/ArrowBtn/arrowBtn';
import { BannerData } from '../../../../../constants/bannerData';
import BannerForProduct from './Banner/banner';
import styles from "./productBanner.module.css";
import Button from '../../../../../components/Button/button';
import Text from '../../../../../components/Text/text';
import SymbolItem from '../../../../../components/SymbolItem/symbolItem';
import { COLORS } from '../../../../../constants/color';
import { PersonIcon } from '../../../../../assets/icons';
import Dot from '../../../../../components/Dot/dot';

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


const ProductBanner = () => {

    const newSwiper = useSwiper()
    const [swiper, setSwiper] = useState(newSwiper);
    const onPrev = () => {
        swiper.slidePrev()
    }
    const onNext = () => {
        swiper.slideNext()
    }
    return (
        <div className={styles.container}>
            <Swiper
                spaceBetween={30}
                modules={[Navigation, Pagination, A11y, EffectFade]}
                slidesPerView="auto"
                effect={'fade'}
                // className="mySwiper"
                onSwiper={(s: any) => {
                    setSwiper(s);
                }}
            >
                {BannerData.map((e, index) => {
                    return (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <BannerForProduct
                                imgUrl={e.image}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
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
                            <Button textSize={'fourteen'} btnSize={'avarage'} btnColor={'lightPurple'} textColor={'textPurple'} borderRadius={'thirty'} title={BannerData[0].cc} />
                            <Text style={{ marginTop: "10px" }} textType={'middle'} textSize={'thirty'} textColor={'white'} cursor={'Cursor'} text={BannerData[0].name} />
                            <div className={styles.locationBox}>
                                <Text cursor='none' textColor='white' textSize='ten' textType='middle' text='Toshkent shahar, Yangi Hayot tumani, O’zar ko’chasi  72-uy 47' />
                            </div>
                            <div className={styles.simpleInfo}>
                                <SymbolItem dot={true} dotColor={COLORS.orange} text={BannerData[0].station} textColor={COLORS.white} />
                                <SymbolItem icon={<PersonIcon />} dotColor={COLORS.orange} text={BannerData[0].stationTime} textType='Montserrat3' textColor={COLORS.white} textSize='12px' />
                            </div>
                            <div className={styles.advertising}>
                                <Button textSize={'fourteen'} btnSize={'middle'} btnColor={'purple'} textColor={'textWhite'} borderRadius={'five'} title='Kvartirani tanlang' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.prevBox}>
                <ArrowBtn onPress={onPrev} onNext={onNext} />
            </div>
        </div>
    )
}

export default ProductBanner
