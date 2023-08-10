import { useState } from "react";
import { A11y, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ArrowBtn from "../../../../../components/ArrowBtn/arrowBtn";
import { BannerData } from "../../../../../constants/bannerData";
import useRootStore from "../../../../../Hooks/useRootStore";
import BannerForProduct from "./Banner/banner";
import styles from "./productBanner.module.css";

const ProductBanner = () => {
    const newSwiper = useSwiper();
    const { oneProduct } = useRootStore().oneProductStore;
    const [swiper, setSwiper] = useState(newSwiper);
    const onPrev = () => {
        swiper.slidePrev();
    };
    const onNext = () => {
        swiper.slideNext();
    };
    return (
        <div className={styles.container}>
            <Swiper
                spaceBetween={30}
                modules={[Navigation, Pagination, A11y, EffectFade]}
                slidesPerView="auto"
                effect={"fade"}
                // className="mySwiper"
                onSwiper={(s: any) => {
                    setSwiper(s);
                }}
            >
                {oneProduct.images.map((e, index) => {
                    return (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <BannerForProduct imgUrl={e.image} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className={styles.prevBox}>
                <ArrowBtn onPress={onPrev} onNext={onNext} />
            </div>
        </div>
    );
};

export default ProductBanner;
