import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { CloseIcon, LogoIcon, MenuIcon, MobileIcon } from "../../assets/icons";
import { COLORS } from "../../constants/color";
import { APP_ROUTES } from "../../routes/app-router";
import BottomLine from "../BottomLine/bottomLine";
import Dot from "../Dot/dot";
import Text from "../Text/text";
import styles from "./dashboard.module.css";
import { useAppModals } from "../Modals";
interface Props{
  onScroll?: boolean
}

const Dashboard: React.FC<Props> = ({
  onScroll=false
}) => {
  const { t } = useTranslation();
  const CategoryData = [
    {
      id: 1,
      name: t("header.categoryData.name1"),
      path: APP_ROUTES.MAIN,
    },
    {
      id: 2,
      name: t("header.categoryData.name2"),
      path: APP_ROUTES.DEVELOPERS,
    },
    {
      id: 3,
      name: t("header.categoryData.name3"),
      path: APP_ROUTES.ABOUT_US,
    },
    {
      id: 4,
      name: t("header.categoryData.name4"),
      path: APP_ROUTES.Card,
    },
  ];
  const [active, setActive] = useState(1);
  const [isClose, setIsClose] = useState(false);

  const navigate = useNavigate();
  const appModals = useAppModals();
  const { i18n } = useTranslation();
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

  const [languageModal, setLanguageModal] = useState(false);

  const onCloseModal = useCallback(
    (name?: any) => {
      i18n.changeLanguage(name);
      setLanguageModal(false);
    },
    [appModals]
  );

  return (
    <div
      style={{
        transition: "0.4s ease-in-out",
        position: onScroll ? "fixed" : "absolute",
        top: onScroll ? "0" : "-300px",
        zIndex: 11,
        width: "100%",
      }}
    >
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
        <a href="tel:+998 93 230 05 00" className={styles.contact}>
          <div className={styles.number}>
            <Text
              textType={"middle"}
              textSize={"fourteen"}
              textColor={"purple"}
              text="+998 93 230 05 00"
            />
          </div>
          <MobileIcon />
        </a>
      </div>

      <div className={styles.container}>
        <div className={styles.topBox}>
          <div
            className={styles.logoBox}
            onClick={() => navigate(APP_ROUTES.HOME)}
          >
            <LogoIcon />
            <h2 className={styles.logoTitle}>Webuilding</h2>
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
          <div className={styles.phone}>
            <Text
              textType={"middle"}
              textSize={"sixteen"}
              textColor={"darkGrey"}
              cursor={"none"}
              text={"+998 (93) 230 05 00"}
            />
            <a
              href="tel:+998932300500"
              style={{ textDecoration: "none" }}
            >
              <Text
                style={{ marginTop: "10px" }}
                textType={"middle"}
                textSize={"fourteen"}
                textColor={"purple"}
                cursor={"Cursor"}
                text={t("header.phone")}
              />
            </a>
          </div>
          <div className={styles.language}>
            <button
              className={styles.languageBtn}
              onClick={() => setLanguageModal((a) => !a)}
            >
              <p>uz</p>
            </button>
          </div>
          {languageModal ? (
            <div className={styles.languageModal}>
              <button
                className={styles.languageBtnModal}
                onClick={() => onCloseModal("uz")}
              >
                <p>uz</p>
              </button>
              <button
                className={styles.languageBtnModal}
                onClick={() => onCloseModal("ru")}
              >
                <p>ru</p>
              </button>
            </div>
          ) : null}
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
                  onClick={() => {
                    Category(e.id);
                    goToNextPage(e.path);
                  }}
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
    </div>
  );
};

export default Dashboard;
