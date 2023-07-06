import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  Clusterer,
  ObjectManager,
} from "@pbe/react-yandex-maps";
import styles from "./yandexMap.module.css";
import SimpleBtn from "../SimpleBtn/simpleBtn";
import { COLORS } from "../../constants/color";
import { LocateIcon } from "../../assets/icons";
import { IGeometry } from "yandex-maps";

type propsType = {
  data: any;
};

const YandexMap = (props: propsType) => {
  const MapModal = () => {
    return (
      <div className={styles.btnBox2}>
        <img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />
      </div>
    );
  };
  return (
    <>
      <YMaps>
        <div className={styles.box}>
          <Map
            style={{
              width: "100%",
              height: "100%",
            }}
            height={100}
            defaultState={{
              center: [41.311158, 69.279737],
              zoom: 12,
              controls: ["fullscreenControl"],
            }}
            modules={["control.FullscreenControl"]}
            className={styles.map}
          >
            <Clusterer
              options={{
                preset: "islands#redClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {props.data?.map(
                (item: {
                  locatsiya1: number[] | IGeometry[][][];
                  locatsiya2: number[] | IGeometry[][][];
                }) => (
                  <Placemark
                    modules={["geoObject.addon.balloon"]}
                    options={{
                      openBalloonOnClick: true,
                      preset: "islands#circleDotIcon",
                      iconColor: "red",
                      cursor: "pointer",
                      balloonCloseButton: false,
                    }}
                    defaultGeometry={[item.locatsiya1, item.locatsiya2]}
                    properties={{
                      balloonContent: `
                        <div data-background="https://cdn.netsolve.ru/Residents/slava/renders/_GzgQRjgeQmcos5WXOvIxztIH1FeYf7pI.png">
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src="https://cdn.netsolve.ru/Residents/slava/renders/_GzgQRjgeQmcos5WXOvIxztIH1FeYf7pI.png"
                        />
                      </div>
                       `,
                    }}
                  />
                )
              )}
            </Clusterer>
          </Map>

          <div className={styles.btnBox}>
            <SimpleBtn
              dotColor={COLORS.black}
              btnType={"primary"}
              icon={<LocateIcon />}
              text="Metro"
            />
          </div>
        </div>
      </YMaps>
    </>
  );
};

export default YandexMap;
