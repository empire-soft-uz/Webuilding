import AboutProducer from "../../../../components/AboutProducer/aboutProducer";
import CollapseContent from "../../../../components/CollapseContent/collapseContent";
import CommentBox from "../../../../components/CommentBox/commentBox";
import Deposits from "../../../../components/Deposits/deposits";
import Documents from "../../../../components/Documents/documents";
import Footer from "../../../../components/Footer/footer";
import Infrastructure from "../../../../components/Infrastructure/infrastructure";
import Invest from "../../../../components/Invest/invest";
import MainAdventages from "../../../../components/MainAdventages/mainAdventages";
import PlaceComment from "../../../../components/PlaceComment/placeComment";
import Procedure from "../../../../components/Procedure/procedure";
import ProcessBuilding from "../../../../components/ProcessBuilding/processBuilding";
// import Header from '../../components/Header/header'
import ProductBanner from "./components/ProductBanner";
import styles from "./product.module.css";

const ProductPage = () => {
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
      <Footer />
    </div>
  );
};

export default ProductPage;
