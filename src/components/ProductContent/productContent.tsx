import React, { useState } from 'react'
import { CameraIcon, FinishIcon, FinishOneIcon } from '../../assets/icons'
import { COLORS } from '../../constants/color'
import { ASSETS } from '../../constants/requireAssets'
import Button from '../Button/button'
import Text from '../Text/text'
import styles from "./productContent.module.css"
import Dot from '../Dot/dot'
import ArrowBtn from '../ArrowBtn/arrowBtn'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, HashNavigation, A11y, EffectFade } from "swiper";
import ProductBanner from './components/ProductBanner'



const BannerData = [
    {
        id: 1,
        image: ASSETS.pr1,
    },
    {
        id: 2,
        image: ASSETS.pr2,
    },
    {
        id: 3,
        image: ASSETS.pr3,
    }
]



const ProductContent = () => {
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
            <ProductBanner />
            <div className={styles.prevBox}>
                <ArrowBtn />
            </div>
            <div className={styles.imgBox}>
                {
                    BannerData.map((e, index) => {
                        return (
                            <img key={index} src={e.image} alt="" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductContent
