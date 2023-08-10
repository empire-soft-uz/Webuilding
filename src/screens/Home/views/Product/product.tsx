import { SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import AboutProducer from "../../../../components/AboutProducer/aboutProducer";
import CollapseContent from "../../../../components/CollapseContent/collapseContent";
import CommentBox from "../../../../components/CommentBox/commentBox";
import Deposits from "../../../../components/Deposits/deposits";
import Documents from "../../../../components/Documents/documents";
import Footer from "../../../../components/Footer/footer";
import Infrastructure from "../../../../components/Infrastructure/infrastructure";
import MainAdventages from "../../../../components/MainAdventages/mainAdventages";
import PlaceComment from "../../../../components/PlaceComment/placeComment";
import Procedure from "../../../../components/Procedure/procedure";
import ProcessBuilding from "../../../../components/ProcessBuilding/processBuilding";
import ProductBanner from "./components/ProductBanner";
import styles from "./product.module.css";
import Invest from "../../../../components/Invest/invest";
import YoutubeVideo from "../../../../components/YoutubeVideo/YoutubeVideo";
import FooterCard from "../../../../components/FooterCard/FooterCard";
import Dashboard from "../../../../components/Dashboard/dashboard";
import useRootStore from "../../../../Hooks/useRootStore";

const ProductPage = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const { getProduct } = useRootStore().oneProductStore;
    useEffect(() => {
        getProduct();
    }, []);

    const handleScroll = (event: {
        currentTarget: { scrollTop: SetStateAction<number> };
    }) => {
        setScrollTop(event.currentTarget.scrollTop);
    };
    console.log("scrollTop", scrollTop);
    return (
        <>
            <Dashboard onScroll />
            <div className={styles.container} onScroll={handleScroll}>
                <ProductBanner />
                <AdsContainerForProducts>
                    <div className="productList">
                        <Deposits />
                        <CollapseContent />
                        {/* <CommentBox /> */}
                        <Infrastructure />
                        <Procedure />
                        {/* <Invest /> */}
                        <MainAdventages />
                        <AboutProducer />
                        <ProcessBuilding />
                        <YoutubeVideo />
                        <Documents />
                        {/* <PlaceComment /> */}
                    </div>

                    <div className="leftAdsBox">
                        <img
                            src="https://domtut.uz/resources/uploads/property/ipak-yoli/main_1.jpg?r=1682593805"
                            alt=""
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </AdsContainerForProducts>
                <FooterCard />
            </div>
        </>
    );
};

export default ProductPage;

const AdsContainerForProducts = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 30px;
    position: relative;
    /* grid-template-columns: 1fr 250px; */
    /* grid-template-areas: "productList rightAdsBox"; */

    .productList {
        /* grid-area: productList; */
        width: 76%;
    }

    .leftAdsBox {
        /* grid-area: rightAdsBox; */
        width: 22%;
        height: 500px;
        position: sticky;
        top: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .container {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0 3vw;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 47px 0;
        padding-top: 36px;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        /* grid-template-columns: 1fr;
        grid-template-areas: "rightAdsBox" "productList"; */
        .productList {
            /* grid-area: productList; */
            width: 100%;
            order: 2;
        }
        .leftAdsBox {
            width: 100%;
            height: 250px;
            position: relative;
            top: 0;
            margin-top: 0;
            margin-bottom: 0;
            order: 1;
        }
    }
`;
