import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, PersonIcon } from "../../assets/icons";
import { COLORS } from "../../constants/color";
import ArrowBtn from "../ArrowBtn/arrowBtn";
import Button from "../Button/button";
import SymbolItem from "../SymbolItem/symbolItem";
import Text from "../Text/text";
import styles from "./banner.module.css";
interface Props {
  imgUrl?: any;
  onPrev?: () => void;
  onNext?: () => void;
  cc?: string;
  name?: string;
  housesSale?: string;
  price?: string;
  countFlat?: string;
  station?: string;
  stationTime?: string;
}

const Banner: React.FC<Props> = ({
  imgUrl,
  onNext,
  onPrev,
  price,
  cc,
  countFlat,
  housesSale,
  name,
  station,
  stationTime,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.aboveBox}>
        <div className={styles.blurBox}>
          <div>
            <Button
              textSize={"fourteen"}
              btnSize={"avarage"}
              btnColor={"lightPurple"}
              textColor={"textPurple"}
              borderRadius={"thirty"}
              title={cc}
            />
            <Text
              style={{ marginTop: "10px" }}
              textType={"middle"}
              textSize={"thirty"}
              textColor={"white"}
              cursor={"Cursor"}
              text={name}
            />
            <div className={styles.simpleInfo}>
              <SymbolItem
                dot={true}
                dotColor={COLORS.orange}
                text={station}
                textColor={COLORS.white}
              />
              <SymbolItem
                icon={<PersonIcon />}
                dotColor={COLORS.orange}
                text={stationTime}
                textType="Montserrat3"
                textColor={COLORS.white}
                textSize="12px"
              />
            </div>
            <div className={styles.advertising}>
              <Text
                textType={"thin"}
                textSize={"fourteen"}
                textColor={"white"}
                cursor={"Cursor"}
                text={housesSale}
              />
              <div className={styles.roomCount}>
                <Text
                  textType={"middle"}
                  textSize={"sixteen"}
                  textColor={"white"}
                  cursor={"Cursor"}
                  text={price}
                />
                <Text
                  textType={"thin"}
                  textSize={"fourteen"}
                  textColor={"white"}
                  cursor={"Cursor"}
                  text={countFlat}
                />
              </div>
              <Button
                textSize={"fourteen"}
                btnSize={"middle"}
                btnColor={"purple"}
                textColor={"textWhite"}
                borderRadius={"five"}
                title="Kvartirani tanlang"
              />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.image} src={imgUrl} alt="" />
    </div>
  );
};

export default Banner;
