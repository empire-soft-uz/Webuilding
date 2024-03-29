import React, { useState } from "react";
import { YMaps, Map, Placemark, Clusterer } from "@pbe/react-yandex-maps";
import styles from "./yandexMap.module.css";
import SimpleBtn from "../SimpleBtn/simpleBtn";
import { COLORS } from "../../constants/color";
import { LocateIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../routes/app-router";
import useRootStore from "../../Hooks/useRootStore";
import { observer } from "mobx-react-lite";
import { ProductDataType } from "../../constants/productData";
import { toJS } from "mobx";

const YandexMap = () => {
    const { nearbuildings } = useRootStore().oneProductStore;
    const navigate = useNavigate();
    const handleButtonOnClick = () => {
        navigate(APP_ROUTES.PRODUCT);
    };

    return (
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
                            preset: "islands#glyphIcon",
                            groupByCoordinates: false,
                        }}
                    >
                        {nearbuildings?.map((item, index) => {
                            console.log("====================================");
                            console.log(toJS(item.yandexUrl1), "item");
                            console.log("====================================");
                            return (
                                <Placemark
                                    key={index}
                                    modules={[
                                        "geoObject.addon.balloon",
                                        "geoObject.addon.hint",
                                    ]}
                                    options={{
                                        openBalloonOnClick: true,
                                        preset: "islands#schoolIcon",
                                        iconColor: "red",
                                        cursor: "pointer",
                                    }}
                                    geometry={[
                                        item.yandexUrl1,
                                        item.yandexUrl2,
                                    ]}
                                    properties={{
                                        balloonContent: `
                                    <div id="custom-button" style="height: 397px; width: 326px ; padding:0,margin:0;box-sizing: border-box;cursor: pointer; z-index: 20 ;border:none ; background-color: transparent;">
                                      <div style="overflow: hidden; height: 240px; width: 100%;">
                                           <img style=" height: 100%; width: 100%; object-fit: cover;" src=${item.image} />
                                      </div>
                                      <div style="padding:10px">
                                         <div style="display: flex; align-items: center;justify-content: space-between;">
                                           <div class="_residence-card-deadline">2-й кв. 2024</div>
                                           <div class="_residence-card-status">Киноцентр</div>
                                         </div>
                                         <h5 style="font-style: normal;font-weight: 600; font-size: 20px;color: #151d33; margin-bottom: 4px;    line-height: 20px;    height: 40px;">SkyView</h5>
                                         <div style="display: flex; align-items: center;justify-content: space-between;    margin-bottom: 12px;height: 23px;">
                                         <div style="margin-right: 8px;display: flex;align-items: center;white-space: nowrap;overflow: hidden;">
                                           <div style="background-color: #a60a78 ;    min-width: 10px;min-height: 10px;margin-right: 8px"></div>
                                           <div class="_residence-card-sub-name">Баррикадная</div>
                                        </div>
                                        <div style="display: flex;align-items: unset;white-space: nowrap;">
                                         <div class="_residence-card-sub-time-ico">
                                           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M10.2754 2.5C10.2754 3.32843 9.60382 4 8.77539 4C7.94696 4 7.27539 3.32843 7.27539 2.5C7.27539 1.67157 7.94696 1 8.77539 1C9.60382 1 10.2754 1.67157 10.2754 2.5Z" fill="#818285"></path>
                                             <path d="M3.27516 7.5C4.07516 5.9 6.60849 4.83333 7.77516 4.5C8.10857 4.5 8.87539 4.7 9.27539 5.5C9.67539 7.1 11.4421 8.16667 12.2754 8.5C12.6087 8.83333 12.9754 9.5 11.7754 9.5C10.5754 9.5 9.27539 8.16667 8.77539 7.5L8.27539 9.5C10.2754 11 10.2754 12.5 10.7754 13.5C11.1754 14.3 10.9421 14.8333 10.7754 15C10.4421 15.1667 9.67539 15.1 9.27539 13.5C8.77539 11.5 7.27539 11 6.27539 10C5.47539 9.2 5.94206 7.66667 6.27539 7C5.47539 6.6 4.60857 7.83333 4.27516 8.5C3.60849 8.83333 2.47516 9.1 3.27516 7.5Z" fill="#818285"></path>
                                             <path d="M7.27539 12L5.77539 10.5C5.77539 12.1 4.77539 13.3333 4.27539 13.5C3.77539 13.8333 3.07539 14.6 4.27539 15C5.47539 15.4 6.77539 13 7.27539 12Z" fill="#818285"></path>
                                           </svg>
                                         </div>
                                         <div class="_residence-card-sub-time-text">  5 мин.</div>
                                       </div>
                                     </div>
                                     <div style="display: flex; align-items: center;justify-content: space-between;">
                                       <div class="_residence-card-price">от 0 млн ₽</div>
                                       <div class="_residence-card-flat-counter">0 кв.</div>
                                     </div>
                                      </div>
                                    </div>
                                     `,
                                    }}
                                    instanceRef={(ref) => {
                                        if (ref) {
                                            ref.events.add(
                                                "balloonopen",
                                                () => {
                                                    const button =
                                                        document.getElementById(
                                                            "custom-button"
                                                        );
                                                    if (button) {
                                                        button.addEventListener(
                                                            "click",
                                                            handleButtonOnClick
                                                        );
                                                    }
                                                }
                                            );
                                            ref.events.add(
                                                "balloonclose",
                                                () => {
                                                    const button =
                                                        document.getElementById(
                                                            "custom-button"
                                                        );
                                                    if (button) {
                                                        button.removeEventListener(
                                                            "click",
                                                            handleButtonOnClick
                                                        );
                                                    }
                                                }
                                            );
                                        }
                                    }}
                                />
                            );
                        })}
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
    );
};

export default observer(YandexMap);
