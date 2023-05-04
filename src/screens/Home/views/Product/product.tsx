import { useEffect } from 'react'
import AboutProducer from '../../../../components/AboutProducer/aboutProducer'
import CollapseContent from '../../../../components/CollapseContent/collapseContent'
import CommentBox from '../../../../components/CommentBox/commentBox'
import Deposits from '../../../../components/Deposits/deposits'
import Documents from '../../../../components/Documents/documents'
import Infrastructure from '../../../../components/Infrastructure/infrastructure'
import Invest from '../../../../components/Invest/invest'
import MainAdventages from '../../../../components/MainAdventages/mainAdventages'
import PlaceComment from '../../../../components/PlaceComment/placeComment'
import Procedure from '../../../../components/Procedure/procedure'
import ProcessBuilding from '../../../../components/ProcessBuilding/processBuilding'
import useRootStore from '../../../../Hooks/useRootStore'
// import Header from '../../components/Header/header'
import ProductBanner from './components/ProductBanner'
import styles from "./product.module.css"
import { observer } from "mobx-react"

const ProductPage = () => {
    const { getProduct } = useRootStore().oneProductStore
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className={styles.container}>
            <ProductBanner />

            <Deposits />

            <CollapseContent />

            <CommentBox />

            <Infrastructure />

            <Procedure />

            <Invest />

            <MainAdventages />

            <AboutProducer />

            <ProcessBuilding />

            <Documents />

            <PlaceComment />
        </div>
    )
}

export default observer(ProductPage)
