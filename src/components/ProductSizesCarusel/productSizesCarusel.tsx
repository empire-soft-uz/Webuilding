import React from 'react'
import ProductSizes from '../ProductSizes/productSizes'
// import Carousel from 'carousel-react-rcdev'
import styles from "./productSizesCarusel.module.css"


const ProductSizesCarusel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <ProductSizes />
                <span className={styles.line}></span>
                <ProductSizes />
                <span className={styles.line}></span>
                <ProductSizes />
                <span className={styles.line}></span>
                <ProductSizes />
                <span className={styles.line}></span>
                <ProductSizes />
            </div>
            <div className={styles.carouselBtns}>
                <button className={styles.carouselBtn}>
                    <img src="/images/arrow-right.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default ProductSizesCarusel
