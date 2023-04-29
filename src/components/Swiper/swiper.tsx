import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, HashNavigation, A11y, EffectFade } from "swiper";
import styles from "./swiper.module.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Banner from '../Banner/banner';
import { ASSETS } from '../../constants/requireAssets';
import { BannerData } from '../../constants/bannerData';
import ArrowBtn from '../ArrowBtn/arrowBtn';


const SwiperComp = () => {
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
                className="mySwiper"
                onSwiper={(s: any) => {
                    setSwiper(s);
                }}
            >
                {BannerData.map((e, index) => {
                    return (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <Banner
                                price={e.price}
                                cc={e.cc}
                                countFlat={e.countFlat}
                                imgUrl={e.image}
                                onPrev={onPrev}
                                onNext={onNext}
                                housesSale={e.housesSale}
                                station={e.station}
                                stationTime={e.stationTime}
                                name={e.name}
                            />
                        </SwiperSlide>
                    )
                })}
                <div className={styles.prevBox}>
                    <ArrowBtn onPress={onPrev} onNext={onNext} />
                </div>
            </Swiper>
        </div>
    )
}

export default SwiperComp
