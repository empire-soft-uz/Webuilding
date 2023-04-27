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
// import Header from '../../components/Header/header'
import ProductContent from '../../../../components/ProductContent/productContent'
import styles from "./product.module.css"

const ProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ProductContent />
            </div>
            <div className={styles.deposit}>
                <Deposits />
            </div>
            <div className={styles.collapseBox}>
                <CollapseContent />
            </div>
            <div className={styles.commentBox}>
                <CommentBox />
            </div>
            <div>
                <Infrastructure />
            </div>
            <div>
                <Procedure />
            </div>
            <div>
                <Invest />
            </div>
            <div>
                <MainAdventages />
            </div>
            <div>
                <AboutProducer />
            </div>
            <div className={styles.processBuilding}>
                <ProcessBuilding />
            </div>
            <div>
                <Documents />
            </div>
            <div>
                <PlaceComment />
            </div>
        </div>
    )
}

export default ProductPage
