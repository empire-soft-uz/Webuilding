import React from 'react'
import useRootStore from '../../Hooks/useRootStore'
import ProductSizes from '../ProductSizes/productSizes'
// import Carousel from 'carousel-react-rcdev'
import styles from "./productSizesCarusel.module.css"
import { observer } from "mobx-react"


const ProductSizesCarusel = () => {
  const { oneProduct } = useRootStore().oneProductStore
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {oneProduct.body.map((e, index) => {
          return (
            <div key={index} className={styles.item}>
              <ProductSizes
                image={e.image}
                rooms={e.rooms}
                common={e.common}
                accommodation={e.accommodation}
                kitchen={e.kitchen}
                roomsArea={e.roomsArea}
                bodySizeFrom={e.bodySizeFrom}
                bodySizeTo={e.bodySizeTo}
              />
              <span className={styles.line}></span>
            </div>
          )
        })}
        {/* <ProductSizes />
                <span className={styles.line}></span>
                <ProductSizes />
                <span className={styles.line}></span>
                <ProductSizes />
                <span className={styles.line}></span>
                <ProductSizes />
                <span className={styles.line}></span> */}
      </div>
    </div>
  )
}

export default observer(ProductSizesCarusel)
