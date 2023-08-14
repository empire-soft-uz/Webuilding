import React from "react";
import styles from "./banner.module.css";
import Text from "../../../../../../components/Text/text";
import Button from "../../../../../../components/Button/button";
import { COLORS } from "../../../../../../constants/color";
import SymbolItem from "../../../../../../components/SymbolItem/symbolItem";
import { PersonIcon } from "../../../../../../assets/icons";
import { BannerData } from "../../../../../../constants/bannerData";
import Dot from "../../../../../../components/Dot/dot";
import styled from "styled-components";

interface Props {
    imgUrl?: any;
}

const date = new Date();

// 17.08.2021 12:00
const dateFormat = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day < 10 ? `0${day}` : day}.${
        month < 10 ? `0${month}` : month
    }.${year} ${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }`;
};

// Bosh sahifa > Toshkent > 0N1234
const breadcrumbs = [
    {
        title: "Bosh sahifa",
        url: "/main",
    },
    {
        title: "Toshkent",
        url: "/main/tashkent",
    },
    {
        title: "0N1234",
        url: "/main/tashkent/0N1234",
    },
];

const BannerForProduct: React.FC<Props> = ({ imgUrl }) => {
    return (
        <Conatiner className={styles.container}>
            <img className={styles.image} src={imgUrl} alt="" />
            <div className={styles.titleBox}>
                <Text
                    textType={"middle"}
                    textSize={"thirty"}
                    textColor={"white"}
                    text="Modern sergeli"
                />
            </div>
            <div
                className={styles.main}
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 99,
                    filter: "blur(5px)",
                }}
            ></div>
        </Conatiner>
    );
};

export default BannerForProduct;

const Conatiner = styled.div`
    position: relative;

    @media (max-width: 768px) {
        .name {
            font-size: 25px;
        }

        .location {
            margin-top: 10px;
        }

        .target {
            div {
                width: 7px;
                height: 7px;
            }

            p {
                font-size: 12px;
            }
        }

        .targetToTime {
            svg {
                width: 16px;
                height: 16px;
            }

            p {
                font-size: 12px;
            }
        }

        .button {
            height: 50px;
            padding: 15px 20px;
        }

        .groupName {
            width: 120px;
            height: 30px;
            padding: 15px 20px;

            p {
                font-size: 12px;
            }
        }
    }
`;
