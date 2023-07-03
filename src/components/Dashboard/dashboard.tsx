import { useCallback, useEffect, useState } from "react";
import {
  CloseIcon,
  LocationIcon,
  LogoIcon,
  MenuIcon,
  MobileIcon,
} from "../../assets/icons";
import { CategoryData } from "../../constants/categoryData";
import { COLORS } from "../../constants/color";
import BottomLine from "../BottomLine/bottomLine";
import Button from "../Button/button";
import Text from "../Text/text";
import styles from "./dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../routes/app-router";
import Dot from "../Dot/dot";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [active, setActive] = useState(1);
  const [isClose, setIsClose] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const Category = (item: any) => {
    setActive(item);
    setIsClose(false);
  };
  const Dashboard2 = () => {
    setIsClose((e) => !e);
  };
  const goToNextPage = useCallback(
    (path: APP_ROUTES | null) => {
      if (path && path !== null) navigate(path);
    },
    [navigate]
  );

  return (
    <>
      <div className={styles.closeHeader}>
        <div className={styles.closeBox} onClick={() => Dashboard2()}>
          {isClose ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className={styles.headerBox}>
          <Text
            textType={"middle"}
            textSize={"sixteen"}
            textColor={"darkGrey"}
            text="Webuilding"
          />
        </div>
        <a href="tel:+998 93 533 13 35" className={styles.contact}>
          <div className={styles.number}>
            <Text
              textType={"middle"}
              textSize={"fourteen"}
              textColor={"purple"}
              text="+998 93 533 13 35"
            />
          </div>
          <MobileIcon />
        </a>
      </div>
      <div className={styles.container}>
        <div className={styles.topBox}>
          <div className={styles.logoBox}>
            <LogoIcon />
            <h2 className={styles.logoTitle}>Webuilding</h2>
          </div>
          <div className={styles.btnLocation}>
            <Button
              textSize={"fourteen"}
              btnSize={"avarage"}
              btnColor={"outline"}
              textColor={"textPurple"}
              borderRadius={"thirty"}
              title={"Tashkent ..."}
              style={{ width: "170px" }}
              iconUrl={<LocationIcon />}
            />
          </div>
          <div className={styles.categoryBox}>
            {CategoryData.map((e, index) => {
              return (
                <div
                  className={styles.textBox}
                  key={index}
                  onClick={() => {
                    Category(e.id);
                    goToNextPage(e.path);
                  }}
                >
                  <Text
                    textType={"middle"}
                    textSize={"sixteen"}
                    textColor={"darkGrey"}
                    cursor={"Cursor"}
                    text={e.name}
                  />
                  {active === e.id ? (
                    <BottomLine color={COLORS.purple} />
                  ) : (
                    <div className={styles.emptyPlace}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.bottomBox}>
          <Text
            textType={"middle"}
            textSize={"sixteen"}
            textColor={"darkGrey"}
            cursor={"none"}
            text={"+998 ( 99 ) 310 37 63"}
          />
          <a
            href="tel:+998993103763"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <Text
              style={{ marginTop: "10px" }}
              textType={"middle"}
              textSize={"fourteen"}
              textColor={"purple"}
              cursor={"Cursor"}
              text={"Sizga qo'ng'iroq qilaylikmi?"}
            />
          </a>
        </div>
      </div>

      <div
        className={styles.container2}
        style={{ top: isClose ? "0vh" : "-100vh" }}
      >
        <div className={styles.topBox2}>
          <div className={styles.categoryBox2}>
            {CategoryData.map((e, index) => {
              return (
                <div
                  className={styles.textBox2}
                  key={index}
                  onClick={() => Category(e.id)}
                >
                  {active === e.id ? (
                    <Dot
                      color={COLORS.purple}
                      size={"seven"}
                      border={"fifty"}
                    />
                  ) : (
                    <div className={styles.emptyPlace}></div>
                  )}
                  <Text
                    textType={"middle"}
                    textSize={"sixteen"}
                    textColor={"darkGrey"}
                    cursor={"Cursor"}
                    text={e.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
